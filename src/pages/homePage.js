import styled from "styled-components"
import { BiStar } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {

    const [window, setWindow] = useState("none")
    const [movies, setMovies] = useState([])
    const [chosenMovie, setchosenMovie] = useState({})


    useEffect(() => {
        const URL = `https://api-movie-diary-2.onrender.com/movies`
        axios.get(URL)
        .then(res => {
            console.log(res);
            setMovies(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <>
        <HomePageStyle>

        <div className="allMovies">
            {movies.map(m => 
                <div className="movie" onClick={() => {setWindow("flex"); setchosenMovie(m)}}>
                <img src={m.imgUrl} alt="filme" />
                <p>{m.title}</p>
                </div>
            )}
            
        </div>
        <MovieInformation close={() => setWindow("none")} window={window} img={chosenMovie.imgUrl} title={chosenMovie.title}/>
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
        <div onClick={props.close} className="x">X</div>
        <div className="review">
            <p>De uma nota ao filme!</p>
            <div className="stars">
                <BiStar/>
                <BiStar/>
                <BiStar/>
                <BiStar/>
                <BiStar/>
            </div>
            <button>Salvar nota</button>
        </div>
        <button>Deletar filme</button>
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
    font-size: 30px;
  color: black;
}
.review{
margin-top: 100px;
display: flex;
flex-direction: column;
align-items: center;
button{
    margin-top: 70px;
    width: 150px;
    height: 60px;
    background-color: green;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border: thin;
    border-radius: 20px;
}
}
.stars{
    margin-top: 20px;
font-size: 40px;
}
button{
    margin-top: 100px;
    width: 150px;
    height: 60px;
    background-color: red;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border: thin;
    border-radius: 20px;
}
}
`