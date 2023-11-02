import { useEffect } from "react";
import "./Loader.css";
function Loader({ setNewStage, stageNow }) {
    useEffect(() => {
        function changeState() {
            if (stageNow === "createOrder") {
                setNewStage("payClicked");
            } else {
                return;
            }
            // setTimeout(changeState, 4000);
        }

        setTimeout(changeState, 4000);
    }, [setNewStage, stageNow]);
    return (
        <>
            <span className="ldr"></span>
        </>
    );
}
export default Loader;
