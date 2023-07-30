import './App.css'
import { Link, Route, Switch } from "wouter"
import { Home } from "./pages/home"
import { Category } from "./pages/category"
import { Header } from './components/header'
import { MyList } from './pages/myList'



function App () {
  
  // const {categories} = useBooks()
  
  return (
    <div className=''>
      <Header/>
      <Switch>
        <Route path='/' component={Home}/>
        <Route path='/category/:category' component={Category}/>
        <Route path='/my-list' component={MyList} />
        <Route>404, Not Found!</Route>
      </Switch>
    </div>
  )
}

export default App
