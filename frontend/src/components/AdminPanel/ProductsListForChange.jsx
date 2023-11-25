import { useState, useEffect } from "react";
import data from "../../data/example";
import MiniItem from "./MiniItem";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAllProducts,
    selectAllProducts,
    selectIsAdvice,
    selectIsTrends,
} from "../../redux/slices/productsSlice";

function ProductsListForChange() {
    const [categories, setCategories] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const [selectedProduct, setSelectedProduct] = useState("Все");
    const allProducts = useSelector(selectAllProducts);
    const trends = useSelector(selectIsTrends);
    const advicedProducts = useSelector(selectIsAdvice);
    function showMeData(data) {
        const mySet = new Set();
        mySet.add("Все");
        data.map((item) => {
            mySet.add(item.category);
            mySet.add("Тренды");
            mySet.add("Советуем к покупке");
            return null;
        });
        setCategories(Array.from(mySet));
    }
    let sortedProducts = [];
    if (
        selectedProduct !== "Тренды" &&
        selectedProduct !== "Советуем к покупке"
    ) {
        sortedProducts = allProducts.filter((product) => {
            const matchesTitle = product.title
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            const matchesCategory =
                selectedProduct === "Все" ||
                product.category === selectedProduct;

            return matchesTitle && matchesCategory;
        });
    } else {
        if (selectedProduct === "Тренды") {
            sortedProducts = trends;
        } else {
            sortedProducts = advicedProducts;
        }
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProducts());
        showMeData(allProducts);
    }, [dispatch]);
    return (
        <div>
            <h2>Изменение товаров</h2>
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
export default ProductsListForChange;
