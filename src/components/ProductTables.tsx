
const ProductTables = () => {
    const productTable = [
        {
            prodName: 'Soybeans (SBBS)',
            quantity: 2003,
            bid: 1736.92
        },
        {
            prodName: 'Paddy Rice (SPRL)',
            quantity: 2003,
            bid: 1736.92
        },
        {
            prodName: 'Maize (SMAZ)',
            quantity: 2003,
            bid: 1736.92
        },
        {
            prodName: 'Soybeans (SBBS)',
            quantity: 2003,
            bid: 1736.92
        },
        {
            prodName: 'Paddy Rice (SPRL)',
            quantity: 2003,
            bid: 1736.92
        },
        {
            prodName: 'Maize (SMAZ)',
            quantity: 2003,
            bid: 1736.92
        },
        {
            prodName: 'Soybeans (SBBS)',
            quantity: 2003,
            bid: 1736.92
        },
        {
            prodName: 'Paddy Rice (SPRL)',
            quantity: 2003,
            bid: 1736.92
        },
        {
            prodName: 'Maize (SMAZ)',
            quantity: 2003,
            bid: 1736.92
        }
    ]

    const style = {
        row: `text-left font-medium cursor-pointer border-b-[1px] border-lightGray`,
        td: `py-3 px-6 2xl:px-8 my-1`
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-2 mt-3 w-full text-sm'>
            <div className='bg-white px-1 max-h-[391px] overflow-auto' id="bookTables">
                <table className='w-full text-left'>
                    <thead className='text-grayText font-500 text-xs border-b-[1px] border-lightGray'>
                        <tr className={style.row}>
                            <th className={style.td}>Products</th>
                            <th className={style.td}>Quantity</th>
                            <th className={style.td}>Bid Price</th>
                        </tr>
                    </thead>
                    <tbody className="py-1">
                        {productTable.map((prod, index) => (
                            <tr key={index} className={`${style.row} hover:bg-lightGray`}>
                                <td className={style.td}>{prod.prodName}</td>
                                <td className={`${style.td} 2xl:text-center`}>{prod.quantity}</td>
                                <td className={`${style.td} text-buyColor`}>
                                    {prod.bid}
                                    <button className="border-[1px] py-[.5px] px-4 ml-8 font-semibold text-sm">Buy</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='bg-white px-1 max-h-[391px] overflow-auto' id="bookTables">
                <table className='w-full text-left'>
                    <thead className='text-grayText font-500 text-xs border-b-[1px] border-lightGray'>
                        <tr className={style.row}>
                            <th className={style.td}>Products</th>
                            <th className={style.td}>Quantity</th>
                            <th className={style.td}>Bid Price</th>
                        </tr>
                    </thead>
                    <tbody className="py-1">
                        {productTable.map((prod, index) => (
                            <tr key={index} className={`${style.row} hover:bg-lightGray`}>
                                <td className={style.td}>{prod.prodName}</td>
                                <td className={`${style.td} 2xl:text-center`}>{prod.quantity}</td>
                                <td className={`${style.td} text-activeColor`}>
                                    {prod.bid}
                                    <button className="border-[1px] py-[.5px] px-4 ml-8 font-semibold text-sm">Sell</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductTables