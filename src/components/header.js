import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";

export default function Header() {

  return (
    <StyleHeader>
      <Link to="/" className="logo">
        <BsFillCameraReelsFill/>
      <div>Movie Diary</div>
      </Link>
      <Link to="/criar-filme" className="create">
        <AiFillPlusCircle/>
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
  .logo{
    width: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 50px;
  font-weight: bold;
  color: white;
  }

  .create{
    width: 340px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 40px;
  font-weight: bold;
  color: white;
  }
`;
