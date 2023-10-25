import { Switch, Route } from "wouter";
import Home from "./pages/home";
import ItemSearch from "./pages/itemSearch";
import ItemDetail from "./pages/itemDetail";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/items/search/:search" component={ItemSearch} />
        <Route path="/items/:id" component={ItemDetail} />
        <Route>
          <>
            <h2>404: Error</h2>
          </>
        </Route>
      </Switch>
    </>
  );
}

export default App;
