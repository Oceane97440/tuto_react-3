import React, { Component } from "react";
import Child from "./Child";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    //state avant
    this.state = {
      name: 'Montage construteur',
      step: 1
    }

    console.log(`Etape ${this.state.step} : Je suis dans le construteur`)

  }

  //la methode s'active unique apres charchement du DOM des composent Parent et Enfant
  // on peut modifier le stat
  componentDidMount() {
    console.log(`Etape ${this.state.step} : Je suis dans le componentDidMount`)
      
    //state après
    this.setState({
      name: this.props.name,
      step:this.state.step +1
    })

    console.log(`Etape ${this.state.step} :setState a changer le stat`)

  }

  //la methode prend 2 param le propos d'avant et le stat d'avant
  componentDidUpdate(prevProps,prevState){
    console.log(`Etape ${this.state.step} : Je suis dans le componentDidUpdate`)
    console.log(prevProps)
    console.log(prevState)

  }

  render() {
    console.log(`Etape ${this.state.step} : Je suis dans le render`)

    return (
      <div>
        {console.log(`Etape ${this.state.step} : MAJ DOM`)}

        <p>Cycles: {this.state.name}</p>

        <p>Chargement: {this.state.step}</p>
        {/* <Child /> */}
      </div>
    )
  }

}

export default LifeCycle;