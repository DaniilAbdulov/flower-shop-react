import { useState, useEffect } from "react";
import data from "../../data/example";
function ChangeProduct({ setVisible, product }) {
    const id = product.data.id;
    const [title, setTitle] = useState(product.data.title);
    const [description, setDescription] = useState(product.data.description);
    const [price, setPrice] = useState(product.data.price);
    const [avaiable, setAvaiable] = useState(product.data.avaiable);
    const [isTrend, setIsTrend] = useState(product.data.isTrend);
    const [isAdvice, setIsAdvice] = useState(product.data.isAdvice);
    const [img, setImg] = useState(product.data.img);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(product.data.category);
    useEffect(() => {
        showMeData(data);
    }, []);

    function showMeData(data) {
        const mySet = new Set();
        mySet.add("Выберите категорию");
        data.map((item) => {
            mySet.add(item.category);
            return null;
        });
        setCategories(Array.from(mySet));
    }
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
                avaiable: Number(avaiable),
                isTrend,
                isAdvice,
                img,
                category,
            };
            console.log(changedProduct);
            setVisible(false);
            setTitle("");
            setDescription("");
            setPrice("");
            setAvaiable("");
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
                    <input
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
                    <label htmlFor="avaiable">В наличии:</label>
                    <input
                        type="number"
                        id="avaiable"
                        value={avaiable}
                        onChange={(e) => setAvaiable(e.target.value)}
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
