import { useContext, useEffect } from 'react'
import LiveMarket from '../components/LiveMarket'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import { BookContext } from '../contexts/BookContext'
import { BookType } from '../@types/book'

const Dashboard = () => {
    const { orderBook, setOrderBook } = useContext(BookContext) as BookType

    return (
        <div className='bg-backgroundColor'>
            <Navbar />
            <Main />
            <LiveMarket />
        </div>
    )
}

export default Dashboard