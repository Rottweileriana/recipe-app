import RecipeListMap  from "./logic/RecipeListMap";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom"
import Navbar from "./Navbar";
import RecipeCard from "./logic/RecipeCard";
import Home from "./Home";
//import { path } from "./logic/RecipesItem"
//import AllRecipies from "./AllRecipies";


const GlobalStyle = createGlobalStyle`
*{

  font-family: 'Bad Script', cursive;
  margin: 0;
  padding: 0;
}
a{
  margin-right: 25px;
  text-decoration: none;
  border-radius: 15px;
  color: black;
}
a:hover{
  color:purple
}`

function App() {
  return (
    <Router>
    <GlobalStyle />
    <Navbar/>
    <div className="App">
    <Switch>
    <Route exact path = "/">
      <Home/>
    </Route>
    <Route path = "/recept_a-o">
    <RecipeListMap/>
    </Route>
    <Route path="/recipe_detail/:id">
      <RecipeCard/>
    </Route>     
     </Switch>
    </div>
    </Router>
  );
}

export default App;
