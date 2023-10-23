import { useRef } from "react";
import ScrollButton from "../UI/ScrollButton";

function General() {
    const targetRef = useRef(null);
    return (
        <div className="home fc">
            <div className="home__body fc__body">
                <div className="home__title">Цветы</div>
                <div className="home__subtitle">это больше, чем слово</div>
                <div className="home__scrolldown">
                    <ScrollButton value="Ассортимент" targetRef={targetRef} />
                </div>
            </div>
        </div>
    );
}
export default General;
