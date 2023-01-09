import CategoryHead from "./CategoryHead"
import ProductTables from "./ProductTables"
import TradeLog from "./TradeLog"

const Products = () => {
    return (
        <div className="px-2 w-full ml-[207px]">
            <CategoryHead />
            <ProductTables />
            <TradeLog />
        </div>
    )
}

export default Products