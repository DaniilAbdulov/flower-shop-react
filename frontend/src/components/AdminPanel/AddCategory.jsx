import { useState } from "react";

function AddCategory({ setVisible }) {
    const [category, setCategory] = useState("");
    function handlerSubmit(e) {
        e.preventDefault();
        if (category) {
            setVisible(false);
            setCategory("");
        } else {
            alert("Введите название категории");
        }
    }
    return (
        <>
            <form onSubmit={handlerSubmit}>
                <label for="category">Новая категория:</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                <button>Добавить категорию</button>
            </form>
        </>
    );
}
export default AddCategory;
