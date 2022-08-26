import RecipesItem from "./RecipesItem"
import recipeList from "./RecipeList"
import styled from "styled-components";


const StyledUL = styled.ul`
display: flex;
list-style-type: none;
flex-wrap: wrap;
{/* max-width: 1800px; */}

`;
const realRecipeList = recipeList.filter(function(recipies){
    return recipies.name !== ""
});
//Sort the recipe list on alphabetical order
realRecipeList.sort(function (a,b){
    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    if (nameA < nameB)
        return -1
    else if (nameA > nameB)
        return 1
    return 0
});
/////////////////////////////////////////////

const RecipeListMap = () => {
    
    return ( 
    <StyledUL>
    {realRecipeList.map(function(item)
    {
        return (
         <RecipesItem key = {item.id} item = {item} /> 
        );
    })
}
</StyledUL>);
 
}
 
export default RecipeListMap;

