import {useState,useEffect} from 'react';
const useImageLoader = (imgUrl) =>{
  const [imgIsLoading,setImgIsLoading] = useState(false);
  const [hasError,setHasError] = useState(false);

  useEffect(()=>{
    const image = new Image();
    image.onload = () => {setImgIsLoading(true)};
    image.onerror = () => {setHasError(true)};
    image.src = imgUrl;
    return () => {
      image.onload = null;
      image.onerror = null;
    };
  },[imgUrl]);
  return {imgIsLoading, hasError};
}
export default useImageLoader;

//const {imgIsLoading, hasError} = useImageLoader(props.data.img);
