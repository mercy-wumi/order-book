import React, { createContext, useEffect, useState } from "react";
import { BookType, Props, IBooks } from '../@types/book'
import Manager from '../lib/encryption.js'

export const BookContext = createContext<BookType | null>(null)

const BookContextProvider: React.FC<Props> = ({ children }) => {
    const [orderBook, setOrderBook] = useState<IBooks[]>([])
    const manager = new Manager({
        key: import.meta.env.VITE_KEY,
        vector: import.meta.env.VITE_VECTOR
    })
    console.log(manager)
    useEffect(() => {
        const ws = new WebSocket('wss://comx-sand-api.afexnigeria.com/stream/trades')
        ws.onmessage = (event) => {
            const json = JSON.parse(event.data)
            try {
                if (json) {
                    console.log(manager.decrypt(json))
                    setOrderBook(json)
                    console.log(orderBook)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
    }, [])

    return (
        <BookContext.Provider value={{ orderBook, setOrderBook }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
