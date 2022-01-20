import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NoMatch from "./components/NoMatch/NoMatch";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <BrowserRouter>
            <Switch>
                <Route  path="/shop">
                    <Shop />
                </Route>
                <Route path="/review">
                    <Review />
                </Route>
                <Route path="/inventory">
                    <Inventory />
                </Route>
                <Route exact path="/product/:productKey">
                    <ProductDetail></ProductDetail>
                </Route>
                <Route exact path="/">
                    <Shop></Shop>
                </Route>
                <Route path="*">
                    <NoMatch></NoMatch>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
