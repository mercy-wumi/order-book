import arrow from '../assets/arrow.png'
import arrowDown from '../assets/arrowDown.png'
import logo from '../assets/logo.png'
import sun from '../assets/sun.png'

const Navbar = () => {
    const figures = [
        {
            name: 'cash balance',
            amount: '#8,374,763'
        },
        {
            name: 'securities value',
            amount: '#8,374,763'
        },
        {
            name: 'laon balance',
            amount: '#7,542,246'
        }
    ]
    return (
        <nav className='bg-white h-[63px] px-4 shadow-sm fixed z-20 top-0 left-0 w-screen'>
            <div className='flex'>
                <div className='w-7/12 flex justify-between items-center'>
                    <img src={logo} alt="logo" />
                    <div className='flex justify-center items-center rounded-2xl p-1 px-2 bg-lightGray mr-8'>
                        <span className='text-[8px] uppercase mr-2'>light</span>
                        <div className='bg-white p-1 rounded-full'><img src={sun} alt="light mode" /></div>
                    </div>
                </div>
                <div className='w-4/12 border-x-[1px] border-[lightGray] flex justify-between items-center px-4 pr-8'>
                    <img src={arrow} alt="arrow icon" />
                    {figures.map((val, index) => (
                        <div key={index}>
                            <span className='text-grayText text-[10px] uppercase block'>{val.name}</span>
                            <span>{val.amount}</span>
                        </div>
                    ))}
                </div>
                <div className='w-1/12 flex justify-end items-center'>
                    <span className='bg-black text-white p-1 mr-2'>Demo</span>
                    <img src={arrowDown} alt="arrow down icon" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar