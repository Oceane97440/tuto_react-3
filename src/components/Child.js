import React, { Component } from "react";

class Child extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        console.log(` Je suis dans le construteur enfant`)

    }

    componentDidMount() {
        console.log(` Je suis dans le componentDidMount enfant`)
      }

    render() {
        console.log(` Je suis dans le render enfant`)

        return (

            <div>
                {console.log(` MAJ DOM composent enfant`)
                }
                Composent child
            </div>
        );
    }
}

export default Child;