import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    fetchAllProducts,
    selectAllProductsLength,
    selectFetchFromThisId,
} from "../redux/slices/productsSlice";
import Assortiment from "../components/Home/Assortiment";
import Advantages from "../components/Home/Advantages";
import General from "../components/Home/General";
import Trends from "../components/Home/Trends";
import "./Pages.scss";
import { selectUserId } from "../redux/slices/userSlice";
function Home() {
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    const fethingId = useSelector(selectFetchFromThisId);
    const allProductsLength = useSelector(selectAllProductsLength);
    useEffect(() => {
        if (userId === "Пользователь был в сети, но разлогинился") {
            return;
        }

        // console.log(userId);
        // console.log(fethingId);
        // console.log(allProductsLength);

        if (userId !== fethingId || !allProductsLength) {
            dispatch(fetchAllProducts(userId));
        }
    }, [userId, fethingId, allProductsLength, dispatch]);
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
