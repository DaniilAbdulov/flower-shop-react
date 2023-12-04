import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeProduct } from "../../redux/slices/adminPanelSlice";
import {
    selectAllProducts,
    selectCategories,
} from "../../redux/slices/productsSlice";
function ChangeProduct({ setVisible, product }) {
    const allProducts = useSelector(selectAllProducts);
    const id = product.data.id;
    const [title, setTitle] = useState(product.data.title);
    const [description, setDescription] = useState(product.data.description);
    const [price, setPrice] = useState(
        Number(product.data.price.replace(/[\s₽]/g, ""))
    );
    const [available, setAvailable] = useState(product.data.available);
    const [isTrend, setIsTrend] = useState(product.data.istrend);
    const [isAdvice, setIsAdvice] = useState(product.data.isadvice);
    const [img, setImg] = useState(product.data.img);
    const [categories, setCategories] = useState([]);
    const cats = useSelector(selectCategories);
    const [category, setCategory] = useState(product.data.category);
    useEffect(() => {
        showMeData(cats);
    }, []);

    function showMeData(data) {
        const mySet = new Set();
        mySet.add("Выберите категорию");
        data.map((item) => {
            mySet.add(item.label);
            return null;
        });
        setCategories(Array.from(mySet));
    }
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        if (category === "Выберите категорию") {
            alert("Выберите категорию товара");
        } else {
            const changedProduct = {
                id,
                title,
                description,
                price: Number(price),
                available: Number(available),
                isTrend,
                isAdvice,
                img,
                category,
            };
            console.log(changedProduct);
            dispatch(changeProduct(changedProduct));
            setVisible(false);
            setTitle("");
            setDescription("");
            setPrice("");
            setAvailable("");
            setIsTrend(false);
            setIsAdvice(false);
            setImg("");
        }
    }
    return (
        <>
            <div className="form__add">
                <form onSubmit={handleSubmit}>
                    <label for="title">Название товара:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label for="description">Описание:</label>
                    <textarea
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <label for="price">Цена:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <label for="available">В наличии:</label>
                    <input
                        type="number"
                        id="available"
                        value={available}
                        onChange={(e) => setAvailable(e.target.value)}
                        required
                    />
                    <div className="add-checkbox">
                        <label for="trend">Тренд ?</label>
                        <input
                            type="checkbox"
                            checked={isTrend}
                            onChange={(e) => setIsTrend(e.target.checked)}
                        />
                    </div>
                    <div className="add-checkbox">
                        <label for="advice">Советовать к покупке ?</label>
                        <input
                            type="checkbox"
                            checked={isAdvice}
                            onChange={(e) => setIsAdvice(e.target.checked)}
                        />
                    </div>
                    <label for="img">Сслыка на изображение:</label>
                    <input
                        type="text"
                        id="img"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        required
                    />
                    <select
                        name="category"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <div className="add-buttons">
                        <button type="submit">Изменить</button>
                        <button type="reset">Очистить форму</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default ChangeProduct;
