import styled from "styled-components"

export default function WatchedMoviesPage() {

    return (
        <>
            <FirstBoard>

            </FirstBoard>
        </>
    )
}





const FirstBoard = styled.div`
background-attachment: scroll;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 70px;
position: relative;
.title{
    width: 385px;
    height: 74px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: absolute;
    background-color: #FFFFFF;
    top: -65px;
    @media (max-width: 614px) {
        width: 85%;
  }
    h1{
        font-size: 30px;
    font-weight: 400;
    line-height: 34px;
    color: #A5A5A5;
    }
    span{
        background-color: #0070B3;
        width: 273px;
        height: 3px;
        margin-top: 5px;
    }
}
h2{
    font-size: 18px;
    line-height: 24px;
    color: #A5A5A5;
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
    width: 60%;
    @media (max-width: 614px) {
width: 90%;
  }
}
.information{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    @media (max-width: 614px) {
flex-direction: column;
width: 90%;
  }
    div{
        p{
            font-size: 18px;
    line-height: 24px;
    color: #A5A5A5;
    font-weight: 300;
    margin-bottom: 25px;
    width: 90%;
        }
    }
    span{
        font-size: 18px;
    line-height: 24px;
    color: #A5A5A5;
    font-weight: 700;
    }
}
img{
    width: 555px;
    height: 350px;
    border-radius: 5px;
    @media (max-width: 614px) {
        margin-top: 30px;
width: 100%;
height: 100%;
  }
}
button{
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    position: relative;
    background: #0070B2;
    color: #FFFFFF;
    padding: 10px 25px;
    text-align: center;
    border-radius: 8px;
    border: none;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    margin-top: 50px;
    margin-bottom: 120px;
}
`

