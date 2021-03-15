import {Route, Switch} from "react-router-dom";
import {Contacts} from './home';
import {Contact} from './user';

function App() { 

  return (
    <Switch>
      <Route exact path="/" component={Contacts} />              
      <Route exact path="/users/:id" component={Contact} /> 
    </Switch>          
  );
}

export default App;
