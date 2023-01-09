import overview from '../assets/overview.png'
import market from '../assets/market.png'
import portfolio from '../assets/portfolio.png'
import persons from '../assets/persons.png'
import report from '../assets/report.png'
import setting from '../assets/setting.png'

const Sidebar = () => {
    return (
        <div className='w-[83px] bg-white h-screen fixed top-[63px] left-0 px-4 shadow-sm'>
            <ul className=''>
                <li className='flex items-center flex-col text-xs font-semibold mt-6'>
                    <img src={overview} alt="overview icon" />
                    <span className='mt-1'>Overview</span>
                </li>
                <li className='flex items-center flex-col text-xs font-semibold mt-6'>
                    <img src={market} alt="market icon" />
                    <span className='mt-1 text-activeColor'>Market</span>
                </li>
                <li className='flex items-center flex-col text-xs font-semibold mt-6'>
                    <img src={portfolio} alt="portfolio icon" />
                    <span className='mt-1'>Portfolio</span>
                </li>
                <li className='flex items-center flex-col text-xs font-semibold mt-6'>
                    <img src={persons} alt="persons icon" />
                    <span className='mt-1'>Persons</span>
                </li>
                <li className='flex items-center flex-col text-xs font-semibold mt-6'>
                    <img src={report} alt="report icon" />
                    <span className='mt-1'>Reports</span>
                </li>
                <li className='flex items-center flex-col text-xs font-semibold mt-6'>
                    <img src={setting} alt="setting icon" />
                    <span className='mt-1'>Settings</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar