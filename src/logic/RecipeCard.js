import styled from "styled-components"
import recipeList from "./RecipeList"

const SDiv = styled.div`
    color: black;
    padding-top: 10px;
    >img{
        width: 25%;
    }
`;

const SUL = styled.ul`
  list-style-type: none;
`;

const SLI = styled.li`
    decoration: none;
`;
const str = window.location.pathname;

const recipe = recipeList[0];
console.log("recipe",recipe);
const ingList = recipe.ingredients.map((ing) =>
<SLI>{ing}</SLI>)
const directionsList = recipe.directions.map((directions) =>
<SLI>{directions}</SLI>)

console.log(str)

function RecipeCard() {
    console.log("hej från card")
    return (<SDiv>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt=""/>
        <SUL>
        {ingList}
        </SUL>
        <br/>
        <ol>
            {directionsList}
        </ol>
        
    </SDiv>);
}
 
export default RecipeCard;