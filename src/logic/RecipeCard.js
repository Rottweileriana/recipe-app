import styled from "styled-components"
import recipeList from "./RecipeList"
// https://spoonacular.com/food-api/docs
import { useParams } from "react-router-dom";
const SDiv = styled.div`
    color: black;
    padding-top: 10px;
    >img{
        width: 25%;
        border-radius: 10%;
    }
`;

const SUL = styled.ul`
  list-style-type: none;
`;

const SLI = styled.li`
    decoration: none;
`;
const str = window.location.pathname;
console.log(window.location.pathname)


console.log(str)

function RecipeCard() {
    let { id } = useParams();
    const findRecipeIndex = (element => element.id === id); 
    const recipeIndex = recipeList.findIndex(findRecipeIndex);
    const recipe = recipeList[recipeIndex];
    const ingList = recipe.ingredients.map((ing) =>
    <SLI>{ing}</SLI>)
    const directionsList = recipe.directions.map((directions) =>
    <SLI>{directions}</SLI>)
    // kolla in .find() som finns under arraye
    console.log("hej från card " + id)
    return (<SDiv>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt=""/>
        <h4>{recipe.portions} portioner</h4>
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