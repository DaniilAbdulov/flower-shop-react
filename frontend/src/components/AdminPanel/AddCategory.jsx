import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory } from "../../redux/slices/adminPanelSlice";

function AddCategory({ setVisible }) {
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    function handlerSubmit(e) {
        e.preventDefault();
        if (category) {
            dispatch(createCategory(category));
            setVisible(false);
            setCategory("");
        } else {
            alert("Введите название категории");
        }
    }
    return (
        <>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="category">Новая категория:</label>
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
