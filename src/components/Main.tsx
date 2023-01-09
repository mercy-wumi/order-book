import Market from './Market'
import Sidebar from './Sidebar'
import Products from './Products'

const Main = () => {
    return (
        <>
            <Sidebar />
            <main className='mt-[63px] ml-[83px] p-2 flex'>
                <Market />
                <Products />
            </main>
        </>
    )
}

export default Main