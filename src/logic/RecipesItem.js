import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLI = styled.li`
display: flex;
flex-direction: column;
align-items: center;
flex-basis: 300px;
padding: 15px;
border: 3px black solid;
border-radius: 10px;
margin: 12px;
font-size: 12px;
`
const Sh1 = styled.h1`
display: flex;
    align-items: flex center;
`
const Simg= styled.img`
    border-radius: 10px;
    width: 150px;
    height: 150px;
`
function RecipeItem(props) {
    return(<StyledLI>
        {/* <Link to = {`/${props.item.name.toLowerCase()}`}> */}
        <Link to = {`/recipe_detail/${props.item.id}`}>
      <Simg src={props.item.image}  alt={props.item.name}/>
      <Sh1>{props.item.name}</Sh1>
      </Link>
      </StyledLI>)
  }
  export default RecipeItem;
  