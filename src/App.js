import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import Navbar from './components/Navbar.component';
import Signin from './components/Signin.component';
import Signup from './components/Signup.component';
import CreateExercise from './components/CreateExercise.component';
import UpdateExercice from './components/UpdateExercises.component';
import ListofExercises from './components/ListofExercises.component';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Navbar />
          <Route path='/' exact component={ListofExercises} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/create-exercise' component={CreateExercise} />
          <Route path='/edit-exercise/:id' component={UpdateExercice} />
      </Router>
    )
  }

}

export default App;
