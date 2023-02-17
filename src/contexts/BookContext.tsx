import React, { createContext, useEffect, useState } from "react";
import { BookType, Props } from '../@types/book'
// import Manager from '../lib/encryption.js'

export const BookContext = createContext<BookType | null>(null)

const BookContextProvider: React.FC<Props> = ({ children }) => {
    const [orderBook, setOrderBook] = useState([])
    // const manager = new Manager({
    //     key: import.meta.env.VITE_KEY,
    //     vector: import.meta.env.VITE_VECTOR
    // })
    // console.log(manager)
    // console.log(import.meta.env.VITE_VECTOR)
    useEffect(() => {
        const ws = new WebSocket('wss://comx-sand-api.afexnigeria.com/stream/trades?authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNjAsInVzZXJuYW1lIjoic2EuYWJkdWxnYWZhckBnbWFpbC5jb20iLCJleHAiOjE2NDAwODUxODIsImVtYWlsIjoic2EuYWJkdWxnYWZhckBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYzOTk5ODc4Mn0.1gAY5vceMv12RfwqlaL_Msyk7wJH0U4BtTGsKh2IfCQ')
        ws.onmessage = (event) => {
            const json = JSON.parse(event.data)
            try {
                if (json) {
                    console.log(json)
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
