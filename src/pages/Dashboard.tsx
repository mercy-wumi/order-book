import { useContext, useEffect } from 'react'
import LiveMarket from '../components/LiveMarket'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import { BookContext } from '../contexts/BookContext'
import { BookType, IBooks } from '../@types/book'

const Dashboard = () => {
    const { orderBook, setOrderBook } = useContext(BookContext) as BookType
    useEffect(() => {
        const ws = new WebSocket('wss://comx-sand-api.afexnigeria.com/stream/trades?authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNjAsInVzZXJuYW1lIjoic2EuYWJkdWxnYWZhckBnbWFpbC5jb20iLCJleHAiOjE2NDAwODUxODIsImVtYWlsIjoic2EuYWJkdWxnYWZhckBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTYzOTk5ODc4Mn0.1gAY5vceMv12RfwqlaL_Msyk7wJH0U4BtTGsKh2IfCQ')
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
        <div className='bg-backgroundColor'>
            <Navbar />
            <Main />
            <LiveMarket />
        </div>
    )
}

export default Dashboard