import no_photo from "../../asserts/no_photo.webp";
import Loader from "./Loader";
function PhotoLoadingHandler({ img, imgIsLoading, hasError }) {
    return (
        <>
            {imgIsLoading ? (
                <img src={img} alt="Flower" />
            ) : hasError ? (
                <img src={no_photo} alt="Flower" />
            ) : (
                <Loader />
            )}
        </>
    );
}
export default PhotoLoadingHandler;
