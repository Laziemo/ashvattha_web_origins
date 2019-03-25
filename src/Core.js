/*
## Gita.Network: ashvattha_web

# componenet:
    ```Core (secondary entry:application_core)``
# description:
    ```This is the main App that holds all other components as Child components.
        Capable of passing down a global state as props to all child components.
    ```

developed by lm(•̪●)==ε/̵͇̿​̿/’̿’̿ ̿ ̿̿ `(•.°)~

*/
import MainNavigator from './components/MainNavigator';
import MainSpace from './components/MainSpace';
import Gallery from './components/Gallery';
import Where from './components/Where';


/*We'll see about you
import Auth from './components/Auth';
import Admin from './components/Admin';
*/
//***This Container is differren..
//***This gal reactstrapz.Shes alwight. Could have better docs.
import {  Container } from 'reactstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {  browserHistory  } from 'react-router';
//***big boy reduz */
import React, { Component }  from 'react';
//GlobalState: the genereal state of things
//Redux breaks down a Component into two types C&P:


//***Container Componenets are concerned with the state of the redux store.
//They make up the engine of the front-end.
//They make things React better by staying aware of the general state of things. 



//Presentational components are only conerned with how things look.
//They could'nt care less about the global state of affairs or functionality of the front end.
//Theyre just here to party!
//At the most one would receive data from a parent component (generally a Container) as props and their existence will end up being based around this prop.
//P's do not care about the redux store basically!.
//This project will separate components in such a way as well.
//We differentiate them as: engine and party; in the container folder


//Provider: Wraps the React application and makes the Redux state available to all container components. Bring him in!
import {  Provider  } from 'react-redux';
//A store is created in the same directory.
import store from './store';
import './basics.css';


export default class App extends Component{
//Provider uses react context to allow any child component to access the store.
//Passing down the store props to all subscribers
// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags. Used here in MainNavigator. .
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
// Routing switch:(case) sorted!
    render(){
      return(
          <Provider store={store}>

          <BrowserRouter history={browserHistory}>
            <div>
            <MainNavigator />
              <Switch>
                <Route exact strict path='/' component={MainSpace} />
                <Route exact strict path='/gallery' component={Gallery} />
                <Route exact strict path='/contact' component={Where} />

              </Switch>
            </div>
          </BrowserRouter>


          </Provider>
      );
    }
}

//the connect function turns a base React component into a Container component.
//connect([mapStatetoProps], [mapDispatchtoProps], [mergeprops], [options]):
//connect is your man! he connects you to the store.

//mapStatetoProps is as the name says. It maps the state of the store to the props of the components who receives updates as a subscriber
//Examples of mapStateToProps will be potential Container components
//older
//by keeping a live update of global state - redux builds a tree structured record of past navigation and creates a navigation map
//of a users usage of the app. for a user it  answers the question - "how did i get here?"" what trail did i take?
//actions being dispatched to a store update its state
