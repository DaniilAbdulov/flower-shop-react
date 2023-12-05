import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "../redux/slices/productsSlice";
import Assortiment from "../components/Home/Assortiment";
import Advantages from "../components/Home/Advantages";
import General from "../components/Home/General";
import Trends from "../components/Home/Trends";
import "./Pages.scss";
import { selectUserId } from "../redux/slices/userSlice";
import { getCartData } from "../redux/slices/cartSlice";
function Home() {
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    useEffect(() => {
        dispatch(fetchAllProducts());
        if (userId) {
            dispatch(getCartData());
        }
    }, [userId, dispatch]);
    return (
        <>
            <General />
            <Advantages />
            <Trends />
            <Assortiment />
        </>
    );
}
export default Home;
