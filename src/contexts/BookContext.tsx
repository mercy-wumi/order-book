import React, { createContext, useEffect, useState } from "react";
import { BookType, Props, IBooks } from '../@types/book'

export const BookContext = createContext<BookType | null>(null)

const BookContextProvider: React.FC<Props> = ({ children }) => {
    const [orderBook, setOrderBook] = useState<IBooks[]>([])

    useEffect(() => {
        const ws = new WebSocket('wss://comx-sand-api.afexnigeria.com/stream/trades')
        ws.onmessage = (event) => {
            const json = JSON.parse(event.data)
            try {
                if (json) {
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
