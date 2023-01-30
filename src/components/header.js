import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillCameraReelsFill } from "react-icons/bs";

export default function Header() {

  return (
    <StyleHeader>
      <Link to="/" className="logo">
        <BsFillCameraReelsFill/>
      <div>Movie Diary</div>
      </Link>
    </StyleHeader>
  );
}

const StyleHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  z-index: 999;
  background: red;
  padding-top: 25px;
  padding-bottom: 25px;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 15%;
  .logo{
    width: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 50px;
  font-weight: bold;
  color: white;
  }



  @media (max-width: 614px) {
    width: 100%;
    height: 80px;
  }
`;
