export interface IBooks {
    order_type: string,
    board_type: string,
    order_price: string,
    matched_qty: string,
    security_type: string,
    created: string,
    updated: string
}

export type Props = {
    children: React.ReactNode
}

export type BookType = {
    orderBook: IBooks[];
    setOrderBook: React.Dispatch<React.SetStateAction<IBooks[]>>
}