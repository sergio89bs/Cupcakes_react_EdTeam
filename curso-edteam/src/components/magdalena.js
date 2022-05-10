
/* -------------------------------------------------------------------------- */
/*                       COMPONENETES FUNCIONALES O BASICOS                  */
/* -------------------------------------------------------------------------- */
function Magdalena(props){

    return(

        <div>
             {/* Llamo a la imagen de la magdalena que esta en public */}
             <img className="magda" src="/images/magda.png" alt="opsss"></img>
    
            {/* Imprimo el atributo color de Magdalena */}
            <h2><span>Color: </span>{props.color}</h2>
            {/* Imprimo el atributo sabor de la Magdalena */}
            <p>{`Sabor: ${props.sabor}`}</p>
           
        </div>
    )
}

export default Magdalena
