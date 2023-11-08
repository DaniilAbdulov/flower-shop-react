import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "../redux/slices/productsSlice";
import Assortiment from "../components/Home/Assortiment";
import Advantages from "../components/Home/Advantages";
import General from "../components/Home/General";
import Trends from "../components/Home/Trends";
import "./Pages.scss";
function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);
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
