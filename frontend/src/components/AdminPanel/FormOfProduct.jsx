import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createProduct } from "../../redux/slices/adminPanelSlice";
import { selectCategories } from "../../redux/slices/productsSlice";
function FormOfProduct({ setVisible, buttonName }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState("");
    const [isTrend, setIsTrend] = useState(false);
    const [isAdvice, setIsAdvice] = useState(false);
    const [img, setImg] = useState("");
    const categories = useSelector(selectCategories);
    const [category, setCategory] = useState(categories[0].label);
    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        if (category === "Выберите категорию") {
            alert("Выберите категорию товара");
        } else {
            const newProduct = {
                title,
                description,
                price: Number(price),
                available: Number(available),
                isTrend,
                isAdvice,
                img,
                category,
            };
            dispatch(createProduct(newProduct));
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
                    <label htmlFor="title">Название товара:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label htmlFor="description">Описание:</label>
                    <textarea
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <label htmlFor="price">Цена:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <label htmlFor="available">В наличии:</label>
                    <input
                        type="number"
                        id="available"
                        value={available}
                        onChange={(e) => setAvailable(e.target.value)}
                        required
                    />
                    <div className="add-checkbox">
                        <label htmlFor="trend">Тренд ?</label>
                        <input
                            type="checkbox"
                            checked={isTrend}
                            onChange={(e) => setIsTrend(e.target.checked)}
                        />
                    </div>
                    <div className="add-checkbox">
                        <label htmlFor="advice">Советовать к покупке ?</label>
                        <input
                            type="checkbox"
                            checked={isAdvice}
                            onChange={(e) => setIsAdvice(e.target.checked)}
                        />
                    </div>
                    <label htmlFor="img">Сслыка на изображение:</label>
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
                            <option value={item.label} key={item.id}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                    <div className="add-buttons">
                        <button type="submit">{buttonName}</button>
                        <button type="reset">Очистить форму</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default FormOfProduct;
