import { useState } from "react"

const CategoryHead = () => {
    const [boardActive, setBoardActive] = useState('x-traded')
    const [productActive, setProductActive] = useState('all')

    const board = [
        {
            name: 'X-Traded',
            value: 'x-traded'
        },
        {
            name: 'OTC',
            value: 'otc'
        },
        {
            name: 'FI',
            value: 'fi'
        },
        {
            name: 'Derivatives',
            value: 'derivatives'
        }
    ]
    const product = [
        {
            name: 'All',
            value: 'all'
        },
        {
            name: 'SMAZ',
            value: 'smaz'
        },
        {
            name: 'SBBS',
            value: 'sbbs'
        },
        {
            name: 'SPRL',
            value: 'sprl'
        },
        {
            name: 'SGNG',
            value: 'sgng'
        },
        {
            name: 'SSGM',
            value: 'ssgm'
        },
        {
            name: 'FETC',
            value: 'fetc'
        },
        {
            name: 'SCOC',
            value: 'scoc'
        }
    ]
    return (
        <div className="p-4 bg-white">
            <div className="flex items-center">
                <span className="text-right font-semibold w-1/12">Board</span>
                <div className="flex">
                    {board.map((val, index) => (
                        <button
                            key={index}
                            value={val.value}
                            className={`${val.value === boardActive ? 'bg-activeColor text-white' : 'bg-backgroundColor'} rounded-3xl font-semibold px-4 py-2  ml-4`}
                        >
                            {val.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex items-center mt-4">
                <span className="text-right font-semibold w-1/12">Product</span>
                <div className="flex">
                    {product.map((val, index) => (
                        <button
                            key={index}
                            value={val.value}
                            className={`${val.value === productActive ? 'bg-activeColor text-white' : 'bg-backgroundColor'} rounded-3xl font-semibold px-4 py-2  ml-4`}
                        >
                            {val.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryHead