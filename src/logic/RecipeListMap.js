import RecipesItem from "./RecipesItem"
import recipeList from "./RecipeList"
import styled from "styled-components";

const StyledUL = styled.ul`
display: flex;
list-style-type: none;
`;

const RecipeListMap = () => {
    
    return ( 
    <StyledUL>
    {recipeList.map(function(item)
    {
        return (
         <RecipesItem key = {item.id} item = {item} /> 
        );
    })
}
</StyledUL>);
 
}
 
export default RecipeListMap;

