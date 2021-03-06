import React, { Component } from "react";
import PureComp from "./PureComponent";
import FunctionComp from "./FunctionComp";

class LifeCycle2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Toto'
        }
       // console.log('Je suis dans le constructor LifeCycle2')

    }

    //la methode se lancé après le construteur il permet de recup les obj
    static getDerivedStateFromProps(props,state) {
       /* console.log('Je suis dans la methode getDerivedStateFromProps')
        console.log(props)
        console.log(state)*/
        return null

    }

    forceUChangement=()=>{
        this.forceUpdate(()=>{
          //  console.log('Je force le changement')

        })

    }

    //methode est appeler dès maj sauf si on utilise la methode forceUpdate
    //mais recharge le composent si la data à modif ou nan
   /* shouldComponentUpdate(nextProps,nextState){
        console.log('Je suis dans la methode shouldComponentUpdate')
        return true
 
    }*/

    render() {
        console.log('Je suis dans le Render()')

        return (
            
            <div className="box">
                <PureComp name={this.state.name}/>
                <FunctionComp name={this.state.name}/>

                <p>Methode getDerivedStateFromProps</p>
                <p>Nom : {this.state.name}</p>
                <p>Age : {this.props.age}</p>
                <button onClick={this.forceUChangement}>Forcer le changement</button>
            </div>
        );
    }
}

export default LifeCycle2;