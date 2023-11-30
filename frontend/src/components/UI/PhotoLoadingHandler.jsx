import no_photo from "../../asserts/no_photo.webp";
import useImageLoader from "../../hooks/useImageLoader";
import Loader from "./Loader";
function PhotoLoadingHandler({ img }) {
    const { imgIsLoading, hasError } = useImageLoader(img);
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
