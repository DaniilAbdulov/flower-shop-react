import { useState, useEffect } from "react";
import data from "../../data/example";
import MiniItem from "./MiniItem";

function ChangeProduct() {
    const [categories, setCategories] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [products, setProducts] = useState(data);
    const [selectedProduct, setSelectedProduct] = useState("Все");
    useEffect(() => {
        showMeData(data);
    }, []);

    function showMeData(data) {
        const mySet = new Set();
        mySet.add("Все");
        data.map((item) => {
            mySet.add(item.category);
            return null;
        });
        setCategories(Array.from(mySet));
    }
    const sortedProducts = products.filter((product) => {
        const mathesTitle = product.title
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        const mathesCategory =
            selectedProduct === "Все" || product.category === selectedProduct;
        return mathesTitle && mathesCategory;
    });
    return (
        <div>
            <div className="change-product__search">
                <label htmlFor="searcg">Поиск продукта</label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <select
                    name="category"
                    id="category"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                >
                    {categories.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            <div className="change-product__list">
                {sortedProducts.map((item) => (
                    <MiniItem data={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}
export default ChangeProduct;
