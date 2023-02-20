import { useContext, useEffect } from 'react'
import LiveMarket from '../components/LiveMarket'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import { BookContext } from '../contexts/BookContext'
import { BookType } from '../@types/book'

const Dashboard = () => {
    const { orderBook, setOrderBook } = useContext(BookContext) as BookType

    return (
        <div className='bg-backgroundColor lg:flex hidden'>
            <div className='xl:w-full 2xl:max-w-[1400px] 2xl:mx-auto'>
                <Navbar />
                <Main />
                <LiveMarket />
            </div>
        </div>
    )
}

export default Dashboard