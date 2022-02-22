import react from "react";


//Methode PureComponent type fonction avec utilisation de react.memo
//Si le propose a changer recharger le composent sinon pas de rechergement
//PurComponent analyse si il faut recharger au non
function FunctionComp(propos) {
    console.log('Je suis dans le FunctionComp')

    return(
        <div>
            <p>Fonction Pure component: {propos.name}</p>
        </div>
    )
    
}

export default react.memo(FunctionComp)