import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from './axios';
import "./styles/card.css"


const baseUrl = "https://image.tmdb.org/t/p/original/"

function Cards({title, fetchUrl }) {

    const [movies, setMovies] = useState([]);
    const [movies2, setMovies2] = useState([]);
    const [movies3, setMovies3] = useState([]);
    const [movies4, setMovies4] = useState([]);
    const [movies5, setMovies5] = useState([]);
    const [movies6, setMovies6] = useState([]);


    //this will run once when the page loads 
    useEffect(() => {
        async function fetchData() {  
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results[0]);
            setMovies2(request.data.results[1]);
            setMovies3(request.data.results[2]);
            setMovies4(request.data.results[3]);
            setMovies5(request.data.results[4]);
            setMovies6(request.data.results[5]);
            console.log(request.data.results[0])
            return request;
        }
        fetchData();
    }, [fetchUrl]);
 
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [modal5, setModal5] = useState(false);
    const [modal6, setModal6] = useState(false);


    const toggleModal = () => {
      setModal(!modal);
    };
    const toggleModal2 = () => {
        setModal2(!modal2);
    };
    const toggleModal3 = () => {
        setModal3(!modal3);
    };
    const toggleModal4 = () => {
        setModal4(!modal4);
    };
    const toggleModal5 = () => {
        setModal5(!modal5);
    };
    const toggleModal6 = () => {
        setModal6(!modal6);
    };

      



    return (
        <div className="row">  
            <h1 className="title">{title}</h1>
       {/*************************************** Modalfor Number #1 Movie***************************************** */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <img className="Modal__img" alt="" src={`${baseUrl}${movies.backdrop_path}`} />
            <h2>{movies.original_title}</h2>
            <p>{movies.overview}</p>
            <h4>Released on {movies.release_date}</h4>
            <button className="close-modal" onClick={toggleModal}>
            <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
     {/*************************************** Modalfor Number #2 Movie***************************************** */}
        {modal2 && (
        <div className="modal">
          <div onClick={toggleModal2} className="overlay"></div>
          <div className="modal-content">
          <img className="Modal__img" alt="" src={`${baseUrl}${movies2.backdrop_path}`} />
            <h2>{movies2.original_title}</h2>
            <p>{movies2.overview}</p>
            <h4>Released on {movies2.release_date}</h4>
            <button className="close-modal" onClick={toggleModal2}>
            <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
  {/*************************************** Modalfor Number #3 Movie***************************************** */}      
      {modal3 && (
        <div className="modal">
          <div onClick={toggleModal3} className="overlay"></div>
          <div className="modal-content">
          <img className="Modal__img" alt="" src={`${baseUrl}${movies3.backdrop_path}`} />
            <h2>{movies3.original_title}</h2>
            <p>{movies3.overview}</p>
            <h4>Released on {movies3.release_date}</h4>
            <button className="close-modal" onClick={toggleModal3}>
            <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}

    {/*************************************** Modalfor Number #4 Movie***************************************** */}
      {modal4 && (
        <div className="modal">
          <div onClick={toggleModal4} className="overlay"></div>
          <div className="modal-content">
          <img className="Modal__img" alt="" src={`${baseUrl}${movies4.backdrop_path}`} />
            <h2>{movies4.original_title}</h2>
            <p>{movies4.overview}</p>
            <h4>Released on {movies4.release_date}</h4>
            <button className="close-modal" onClick={toggleModal4}>
            <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
  {/*************************************** Modal for Number #5 Movie***************************************** */} 
      {modal5 && (
        <div className="modal">
          <div onClick={toggleModal5} className="overlay"></div>
          <div className="modal-content">
          <img className="Modal__img" alt="" src={`${baseUrl}${movies5.backdrop_path}`} />
            <h2>{movies5.original_title}</h2>
            <p>{movies5.overview}</p>
            <h4>Released on {movies5.release_date}</h4>
            <button className="close-modal" onClick={toggleModal5}>
            <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
    {/*************************************** Modalfor Number #6 Movie***************************************** */}    
      {modal6 && (
        <div className="modal">
          <div onClick={toggleModal6} className="overlay"></div>
          <div className="modal-content">
          <img className="Modal__img" alt="" src={`${baseUrl}${movies6.backdrop_path}`} />
            <h2>{movies6.original_title}</h2>
            <p>{movies6.overview}</p>
            <h4>Released on {movies6.release_date}</h4>
            <button className="close-modal" onClick={toggleModal6}>
            <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
      {/************************First Row ************************************* */}
            <div className="row__posters">

              <div className="movie__card" onClick={toggleModal}>
                <div className="movie__image">
              <img className="poster__img" alt="" src={`${baseUrl}${movies.poster_path}`} />
              </div>

              <div className='movie__details'>
                <h2>{movies.original_title}</h2>
                <p className='brief__overview'>{movies.overview}</p>
                <h3>Rated {movies.vote_average}</h3>
              </div>
               </div>


               <div className="movie__card" onClick={toggleModal2}>
               <div className="movie__image">
               <img className="poster__img" alt="" src={`${baseUrl}${movies2.poster_path}`} />
               </div>
                <div className='movie__details'>
                <h2>{movies2.original_title}</h2>
                <p className='brief__overview'>{movies2.overview}</p>
                <h3>Rated {movies2.vote_average}</h3>
                </div>
                </div>

            </div>
     {/************************Second Row ************************************* */}
       <div className="row__posters">

              <div className="movie__card" onClick={toggleModal3}>
                <div className="movie__image">
              <img className="poster__img" alt="" src={`${baseUrl}${movies3.poster_path}`} />
              </div>

              <div className='movie__details'>
                <h2>{movies3.original_title}</h2>
                <p className='brief__overview'>{movies3.overview}</p>
                <h3>Rated {movies3.vote_average}</h3>
              </div>
               </div>


               <div className="movie__card" onClick={toggleModal4}>
               <div className="movie__image">
               <img className="poster__img" alt="" src={`${baseUrl}${movies4.poster_path}`} />
               </div>
                <div className='movie__details'>
                <h2>{movies4.original_title}</h2>
                <p className='brief__overview'>{movies4.overview}</p>
                <h3>Rated {movies4.vote_average}</h3>
                </div>
                </div>
         </div>
         {/************************Third Row ************************************* */}
             <div className="row__posters">

              <div className="movie__card" onClick={toggleModal5}>
                <div className="movie__image">
              <img className="poster__img" alt="" src={`${baseUrl}${movies5.poster_path}`} />
              </div>

              <div className='movie__details'>
                <h2>{movies5.original_title}</h2>
                <p className='brief__overview'>{movies5.overview}</p>
                <h3>Rated {movies5.vote_average}</h3>
              </div>
               </div>


               <div className="movie__card" onClick={toggleModal6}>
               <div className="movie__image">
               <img className="poster__img" alt="" src={`${baseUrl}${movies6.poster_path}`} />
               </div>
                <div className='movie__details'>
                <h2>{movies6.original_title}</h2>
                <p className='brief__overview'>{movies6.overview}</p>
                <h3>Rated {movies6.vote_average}</h3>
                </div>
                </div>

            </div>
        </div> 
    )
}

export default Cards