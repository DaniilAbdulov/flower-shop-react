import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Page404() {
    const [seconds, setSeconds] = useState(5);
    const [nameSec, setNameSec] = useState("секунд");
    const navigate = useNavigate();
    function nameSeconds(seconds) {
        switch (seconds) {
            case 0:
            case 5:
                setNameSec("секунд");
                break;
            case 2:
            case 3:
            case 4:
                setNameSec("секунды");
                break;
            default:
                setNameSec("секунду");
                break;
        }
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (seconds === 0) {
            navigate("/");
        }
        nameSeconds(seconds);
    }, [navigate, seconds]);

    return (
        <div className="home fc">
            <div className="home__body fc__body">
                <div className="home__title">404</div>
                <div className="home__subtitle">
                    Страница не найдена. Через {seconds} {nameSec} будет
                    осуществлен переход на главную страницу
                </div>
            </div>
        </div>
    );
}

export default Page404;
