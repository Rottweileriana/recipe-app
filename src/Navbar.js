import styled from "styled-components"
import {Link} from "react-router-dom"

const SDiv = styled.div`
    color: black;
    display: inline;
    border-bottom: 5px solid;
`;


const Navbar = () => {
    return ( <SDiv>
        <Link to = "/"> Start </Link>
        <Link to = "/recept_a-o"> Recept A-Ö </Link>

    </SDiv> );
}
 
export default Navbar;