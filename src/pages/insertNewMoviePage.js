import { useState } from "react";
import styled from "styled-components"
import axios from "axios";

export default function InsertNewMoviePage() {
    const [imgUrl, setImgUrl] = useState("");
    const [title, setTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [genre, setGenre] = useState("");


    function sendNewMovie(){
        const URL = `https://api-movie-diary-2.onrender.com/movies`

        axios.post(URL,{imgUrl, title, platform, genre})
        .then(res => {
            if(res.data === "OK"){
                alert("filme salvo com sucesso")
            }
            console.log(res);
        })
        .catch(err => {
            console.log(err);
            alert(err.data)
        })
    }

    return (
        <InsertPageStyle>
        <form className="inputs">
            <input type="text" placeholder="url da imagem" value={imgUrl} onChange={e => setImgUrl(e.target.value)}/>
            <input type="text" placeholder="titulo" value={title} onChange={e => setTitle(e.target.value)}/>
            <input type="text" placeholder="plataforma" value={platform} onChange={e => setPlatform(e.target.value)}/>
            <input type="text" placeholder="genero" value={genre} onChange={e => setGenre(e.target.value)}/>
        </form>
        <button onClick={sendNewMovie}>Salvar</button>
        </InsertPageStyle>
    )
}





const InsertPageStyle = styled.div`
background-color: black;
width: 100%;
height: 100%;
padding-top: 100px;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 100vh;

input{
    width: 600px;
    height: 50px;
    margin-bottom: 20px;
    padding-left: 15px;
    font-size: 20px;
}

button{
    width: 150px;
    height: 40px;
    font-size: 25px;
    border: thin;
    border-radius: 15px;
    cursor: pointer;
}

.inputs{
    margin-top: 150px;
    display: flex;
    flex-direction: column;
}
`