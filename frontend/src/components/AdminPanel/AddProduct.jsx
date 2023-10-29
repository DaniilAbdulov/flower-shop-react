import { useState } from "react";
import data from "../../data/example";
function AddProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [avaiable, setAvaiable] = useState("");
    const [isTrend, setIsTrend] = useState(false);
    const [isAdvice, setIsAdvice] = useState(false);
    const [img, setImg] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            title,
            description,
            price,
            avaiable,
            isTrend,
            isAdvice,
            img,
        };
        console.log(newProduct);
        data.push(newProduct);
        setTitle("");
        setDescription("");
        setPrice("");
        setAvaiable("");
        setIsTrend(false);
        setIsAdvice(false);
        setImg("");
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
                    <div className="add-buttons">
                        <button type="submit">Добавить</button>
                        <button type="reset">Очистить форму</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default AddProduct;
