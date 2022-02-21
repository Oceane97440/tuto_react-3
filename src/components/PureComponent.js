import react,{Component,PureComponent} from "react";


//PureComponent possède sa propre methode shouldComponentUpdate
//Si la data ne change pas pas de rechargement du composent
class PureComp extends PureComponent {
  
    render() { 
         console.log('render() du pureComponent')
        return ( 
            <div>
                <h3>Methode PureComponent</h3>
            </div>
         );
    }
}
 
export default PureComp;