import styled from "styled-components";
import RecipeListMap from "./logic/RecipeListMap";

const SDiv = styled.div`
max-width: 500px;
margin-right: 500px;
`;


const AllRecipies = () => {


    return(
        <SDiv>
            <RecipeListMap/>
        </SDiv>
    )

}

export default AllRecipies;