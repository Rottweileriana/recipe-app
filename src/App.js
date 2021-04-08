import RecipeListMap  from "./logic/RecipeListMap";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom"
import Navbar from "./Navbar";
import RecipeCard from "./logic/RecipeCard";
import Home from "./Home";
import { path } from "./logic/RecipesItem"


const GlobalStyle = createGlobalStyle`
*{

  font-family: 'Bad Script', cursive;
  margin: 0;
  padding: 0;
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
    <Route path >
      <RecipeCard/>
    </Route>     
     </Switch>
    </div>
    </Router>
  );
}

export default App;
