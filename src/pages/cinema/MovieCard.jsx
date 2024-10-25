/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { getImgUrl } from "../../utils/movieUtility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../../context";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);

  // item add from movie card data into shoppingcart
  const handleAddToCart = (e, movie) => {
    e.stopPropagation();

    const isExistMovie = cartData.find(
      (cartItem) =>{
        return cartItem.id === movie.id
      }
    );

    if (!isExistMovie) {
      setCartData([...cartData, movie]);
    } else {
      // console.error(`${movie.title} movie has already added in your cart`);
        alert(`${movie.title} movie has already added`)
    }
  };

  const handleModalClose = () => {
    setSelectedMovies(null);
    setShowModal(false);
  };

  const handleSelectionMovie = (movie) => {
    setSelectedMovies(movie);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal 
        movie={selectedMovies} 
        onCartAdd={handleAddToCart}
        onClose={handleModalClose} />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleSelectionMovie(movie)}>
          <img
            className="w-full object-cover h-80"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-[23px] mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2  md:text-[19px]  dark:text-[#a3a7be]">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
