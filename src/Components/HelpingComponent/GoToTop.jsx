import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const isTop = window.scrollY > 100
    setShowButton(isTop)
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //   handle go to top btn
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (

      <button onClick={handleGoToTop} className={`z-50 fixed bottom-5 right-5 opacity-50 hover:opacity-100 transition duration-500 btn border-none bg-primary-main hover:bg-primary-main font-bold rounded-full ${showButton ? 'inline-block' : 'hidden'}`}>
        <FaArrowUp></FaArrowUp>
      </button>
  );
};

export default GoToTop;