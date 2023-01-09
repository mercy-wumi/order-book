import trending from '../assets/trending.png'
import eye from '../assets/eye.png'
import history from '../assets/history.png'
import closedTrades from '../assets/closedTrades.png'
import cancelled from '../assets/cancelled.png'
import book from '../assets/book.png'
import searchIcon from '../assets/searchIcon.png'

const Market = () => {
    const style = {
        listMenu: `flex items-center hover:bg-backgroundColor hover:text-activeColor font-semibold text-sm py-4 p-5 cursor-pointer`
    }
    return (
        <div className='bg-white p-2 w-[207px] h-fit fixed'>
            <div className='border-[1px] p-1 px-2 flex items-center text-sm bg-searchBg border-borderSearch'>
                <img src={searchIcon} alt="search icon" />
                <input type="text" placeholder='Search' className='outline-none bg-inherit ml-1' />
            </div>
            <ul className='py-2'>
                <li className={style.listMenu}>
                    <img src={trending} alt=" trending icon" />
                    <span className='ml-4'>Product View</span>
                </li>
                <li className={`${style.listMenu} bg-backgroundColor text-activeColor`}>
                    <img src={book} alt=" trending icon" />
                    <span className='ml-4'>Order Book</span>
                </li>
                <li className={style.listMenu}>
                    <img src={history} alt=" trending icon" />
                    <span className='ml-4'>Price History</span>
                </li>
                <li className={style.listMenu}>
                    <img src={eye} alt=" trending icon" />
                    <span className='ml-4'>Open Orders</span>
                </li>
                <li className={style.listMenu}>
                    <img src={closedTrades} alt=" trending icon" />
                    <span className='ml-4'>Closed Trades</span>
                </li>
                <li className={style.listMenu}>
                    <img src={cancelled} alt=" trending icon" />
                    <span className='ml-4'>Cancelled Trades</span>
                </li>
            </ul>
        </div>
    )
}

export default Market