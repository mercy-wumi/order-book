
const TradeLog = () => {
    const trade = [
        {
            securityName: 'paddy Rice (SPRL)',
            boardName: 'X-Traded',
            orderType: 'Buy',
            matchedPrice: 1792.65,
            quantity: 9265,
            date: '17 Oct, 2020',
            time: '07:38'
        },
        {
            securityName: 'paddy Rice (SPRL)',
            boardName: 'X-Traded',
            orderType: 'Buy',
            matchedPrice: 1792.65,
            quantity: 9265,
            date: '17 Oct, 2020',
            time: '07:38'
        },
        {
            securityName: 'paddy Rice (SPRL)',
            boardName: 'X-Traded',
            orderType: 'Buy',
            matchedPrice: 1792.65,
            quantity: 9265,
            date: '17 Oct, 2020',
            time: '07:38'
        },
        {
            securityName: 'paddy Rice (SPRL)',
            boardName: 'X-Traded',
            orderType: 'Buy',
            matchedPrice: 1792.65,
            quantity: 9265,
            date: '17 Oct, 2020',
            time: '07:38'
        },
        {
            securityName: 'paddy Rice (SPRL)',
            boardName: 'X-Traded',
            orderType: 'Buy',
            matchedPrice: 1792.65,
            quantity: 9265,
            date: '17 Oct, 2020',
            time: '07:38'
        },
        {
            securityName: 'paddy Rice (SPRL)',
            boardName: 'X-Traded',
            orderType: 'Buy',
            matchedPrice: 1792.65,
            quantity: 9265,
            date: '17 Oct, 2020',
            time: '07:38'
        },
        {
            securityName: 'paddy Rice (SPRL)',
            boardName: 'X-Traded',
            orderType: 'Buy',
            matchedPrice: 1792.65,
            quantity: 9265,
            date: '17 Oct, 2020',
            time: '07:38'
        },
        {
            securityName: 'paddy Rice (SPRL)',
            boardName: 'X-Traded',
            orderType: 'Buy',
            matchedPrice: 1792.65,
            quantity: 9265,
            date: '17 Oct, 2020',
            time: '07:38'
        },
        {
            securityName: 'paddy Rice (SPRL)',
            boardName: 'X-Traded',
            orderType: 'Buy',
            matchedPrice: 1792.65,
            quantity: 9265,
            date: '17 Oct, 2020',
            time: '07:38'
        }
    ]

    const style = {
        row: `text-left font-medium cursor-pointer border-b-[1px] border-lightGray`,
        td: `py-3 px-8 my-1`
    }

    return (
        <div className='mt-3 w-full text-sm bg-white'>
            <span className="block uppercase text-grayText font-semibold p-4 border-b-2 border-lightGray">Trade Log</span>
            <div className='px-1 max-h-[391px] overflow-auto' id="bookTables">
                <table className='w-full max-h-[391px] text-left '>
                    <thead className='text-grayText font-500 text-xs border-b-[1px] border-lightGray'>
                        <tr className={style.row}>
                            <th className={style.td}>Security</th>
                            <th className={style.td}>Board</th>
                            <th className={style.td}>Order Type</th>
                            <th className={style.td}>Matched Price</th>
                            <th className={style.td}>Quantity</th>
                            <th className={style.td}>Date</th>
                            <th className={style.td}>Time</th>
                        </tr>
                    </thead>
                    <tbody className="py-1">
                        {trade.map((prod, index) => (
                            <tr key={index} className={`${style.row} hover:bg-lightGray`}>
                                <td className={style.td}>{prod.securityName}</td>
                                <td className={style.td}>{prod.boardName}</td>
                                <td className={style.td}>{prod.orderType}</td>
                                <td className={style.td}>{prod.matchedPrice}</td>
                                <td className={style.td}>{prod.quantity}</td>
                                <td className={style.td}>{prod.date}</td>
                                <td className={style.td}>{prod.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TradeLog