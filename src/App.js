import React,{Component} from 'react';
import LifeCycle from './components/LifeCycle';
import './App.css';


class App extends Component {

  state={
    display :true
  }


  //fonction onclik qui supprimer ou affiche le composent
  delete= ()=>{

    this.setState({
      display: !this.state.display
    })
  }

  render() { 

    //condition qui verif le statut display , si c true lors du clic le composent s'affiche sinon il disparait
    const showComponent= this.state.display ? ( <LifeCycle name="Toto 2"/>): (<div>Coposent vide</div>);

    return (   
    <div className="App">
     {showComponent}
      <button onClick={this.delete}>Clique ici</button>
    </div> 
    );
  }
}
 


export default App;
