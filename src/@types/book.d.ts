export type Props = {
    children: React.ReactNode
}

export type BookType = {
    orderBook: IBooks[];
    setOrderBook: React.Dispatch<React.SetStateAction<>>
}