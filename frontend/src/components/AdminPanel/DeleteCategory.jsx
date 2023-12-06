import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../redux/slices/productsSlice";
import { deleteCategory } from "../../redux/slices/adminPanelSlice";

function DeleteCategory({ setVisible }) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();
    function handlerSubmit(e) {
        e.preventDefault();
        if (selectedCategory) {
            dispatch(deleteCategory(selectedCategory));
        } else {
            alert("Введите название категории");
        }
    }
    return (
        <form style={{ marginTop: "20px" }}>
            <select
                name="category"
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                {categories.map((item) => (
                    <option value={item.label} key={item.id}>
                        {item.label}
                    </option>
                ))}
            </select>
            <button onClick={handlerSubmit}>Удалить</button>
        </form>
    );
}
export default DeleteCategory;
