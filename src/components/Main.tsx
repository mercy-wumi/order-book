import Market from './Market'
import Sidebar from './Sidebar'
import Products from './Products'

const Main = () => {
    return (
        <>
            <Sidebar />
            <main className='mt-[63px] ml-[83px] p-2 flex min-h-screen'>
                <Market />
                <Products />
            </main>
        </>
    )
}

export default Main