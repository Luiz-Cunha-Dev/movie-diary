import styled from "styled-components"
import { BiStar } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {

    const [window, setWindow] = useState("none")
    const [movies, setMovies] = useState([])
    const [chosenMovie, setchosenMovie] = useState({})
    const [platformAndGenre, setPlatformAndGenre] = useState({})
    const [review, setReview] = useState(0)


    useEffect(() => {
        loadMovies()
    }, [])

    function loadMovies(){
        const URL = `https://api-movie-diary-2.onrender.com/movies`
        axios.get(URL)
        .then(res => {
            console.log(res.data);
            setMovies(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    function deleteMovie(movieId){

        const URL = `https://api-movie-diary-2.onrender.com/movies/${movieId}`
        axios.delete(URL)
        .then(res => {
            console.log(res.data);
            alert("Filme apagado com sucesso!")
            setWindow("none")
            loadMovies()
        })
        .catch(err => {
            console.log(err);
        })
    }

    function sendReview(movieId){
        const URL = `https://api-movie-diary-2.onrender.com/movies/${movieId}`
        axios.put(URL, {score: review})
        .then(res => {
            console.log(res.data);
            alert("Avaliação feita com sucesso!")
            loadMovies()
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <>
        <HomePageStyle>

        <div className="allMovies">
            {movies.map(m => 
                <div className="movie" onClick={() => {setWindow("flex"); m.reviews !== null ? setReview(m.reviews.score) : setReview(0); setchosenMovie(m); setPlatformAndGenre({platform: m.platforms.name, genre: m.genres.name, review: m.reviews.score})}}>
                <img src={m.imgUrl} alt="filme" />
                <p>{m.title}</p>
                </div>
            )}
            
        </div>
        <MovieInformation send={() => sendReview(chosenMovie.id)} star5={() => setReview(5)} star4={() => setReview(4)} star3={() => setReview(3)} star2={() => setReview(2)} star1={() => setReview(1)} review={review} delete={() => deleteMovie(chosenMovie.id)} close={() => setWindow("none")} genre={platformAndGenre.genre} platform={platformAndGenre.platform} window={window} img={chosenMovie.imgUrl} title={chosenMovie.title} />
</HomePageStyle>
        </>
    )
}

function MovieInformation(props){
    return(
<MovieInformationStyle window={props.window}>
    <img src={props.img} alt="movie" />
    <div className="options">
        <p>{props.title}</p>
        <p>Plataforma: {props.platform}</p>
        <p>Genero: {props.genre}</p>
        <div onClick={props.close} className="x">X</div>
        <div className="review">
            <p>De uma nota ao filme!</p>
            <div className="stars">
                {props.review > 0 ? <AiFillStar onClick={props.star1}/> : <BiStar onClick={props.star1}/>}
                {props.review >= 2 ? <AiFillStar onClick={props.star2}/> : <BiStar onClick={props.star2}/>}
                {props.review >= 3 ? <AiFillStar onClick={props.star3}/> : <BiStar onClick={props.star3}/>}
                {props.review >= 4 ? <AiFillStar onClick={props.star4}/> : <BiStar onClick={props.star4}/>}
                {props.review === 5 ? <AiFillStar onClick={props.star5}/> : <BiStar onClick={props.star5}/>}
            </div>
            <button onClick={props.send}>Salvar nota</button>
        </div>
        <button onClick={props.delete}>Deletar filme</button>
    </div>
</MovieInformationStyle>
    )

}


const HomePageStyle = styled.div`
background-color: black;
width: 100%;
height: 100%;
padding-top: 100px;
display: flex;
justify-content: center;
padding-bottom: 100vh;

.allMovies{
display: flex;
justify-content: center;
flex-wrap: wrap;
padding-top: 50px;
width: 90%;
}

.movie{
    display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-right: 50px;
margin-bottom: 60px;
cursor: pointer;
img{
        width: 200px;
    }
p{
    margin-top: 15px;
    font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: center;
  width: 250px;
}
}
`

const MovieInformationStyle = styled.div`
position: fixed;
width: 1000px;
height: 800px;
background-color: white;
border-radius: 80px;
display: flex;
align-items: center;
justify-content: space-around;
display: ${props => props.window};

img{
    width: 400px;
}

.options{
    width: 500px;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .x{
        position: absolute;
        font-size: 30px;
        font-weight: bold;
        right: 25px;
        top: -70px;
        cursor: pointer;
    }
    p{
        margin-top: 13px;
    font-size: 30px;
    text-align: center;
  color: black;
}
.review{
margin-top: 40px;
display: flex;
flex-direction: column;
align-items: center;
button{
    margin-top: 40px;
    width: 150px;
    height: 60px;
    background-color: green;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border: thin;
    border-radius: 20px;
    cursor: pointer;
}
}
.stars{
    margin-top: 20px;
font-size: 40px;
}
button{
    margin-top: 40px;
    width: 150px;
    height: 60px;
    background-color: red;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border: thin;
    border-radius: 20px;
    cursor: pointer;
}
}
`