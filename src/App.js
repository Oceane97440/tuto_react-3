import React, { Component } from 'react';
import LifeCycle from './components/LifeCycle';
import LifeCycle2 from './components/LifeCycle2';
import './App.css';


class App extends Component {

  state = {
    display: true,
    age: 27
  }


  //fonction onclik qui supprimer ou affiche le composent
  delete = () => {

    this.setState({
      display: !this.state.display
    })
  }

  //fonction onclik qui modif le stat on add +1 à l'age
  update = () => {

    this.setState({
      age: this.state.age + 1
    })
  }

  render() {

    //condition qui verif le statut display , si c true lors du clic le composent s'affiche sinon il disparait
    const showComponent = this.state.display ? (<LifeCycle name="Toto 2" />) : (<div>Coposent vide</div>);

    return (
      <div className="App">
        <LifeCycle2 age={this.state.age} />
        <button onClick={this.update}>Clique ici pour changer le propos</button>

        {/* {showComponent}
        <button onClick={this.delete}>Clique ici</button> */}
      </div>
    );
  }
}



export default App;
