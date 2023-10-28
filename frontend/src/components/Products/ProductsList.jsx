import ProductItem from "./ProductItem";

function ProductsList({ items }) {
    return (
        <>
            {items.map((item) => (
                <ProductItem data={item} key={item.id} />
            ))}
        </>
    );
}
export default ProductsList;
