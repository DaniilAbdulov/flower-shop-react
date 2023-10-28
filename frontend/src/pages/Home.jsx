import Assortiment from "../components/Home/Assortiment";
import Advantages from "../components/Home/Advantages";
import General from "../components/Home/General";
import Trends from "../components/Home/Trends";
import "./Pages.scss";
function Home() {
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
