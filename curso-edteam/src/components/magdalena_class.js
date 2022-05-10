import React, { Component } from "react";

class MagdalenaClass extends Component{

    // Creo un constructor para usar el estado
    constructor(props){
        super(props);
        this.state = {           
        magdalenaVendida:false
        }
    // Usar bind para utilizar los propiedades del constructor en funcines
    this.estadoProducto = this.estadoProducto.bind(this)
    }

     /* --------------- Metodo para cambiar estado del constructor --------------- */
    estadoProducto(){
        this.setState({
            magdalenaVendida:true
        })
    }
    /* ---------- Metodo para renderizar todo el componente de la clase --------- */
    render(){

        return(
           
        <div>
            {/* Llamo a la imagen de la magdalena que esta en public */}
            <img className="magdaClass" src="/images/magda.png" alt="opsss"></img>
            {/* Imprimo el atributo color de Magdalena */}
            <h2><span>Color: </span>{this.props.color}</h2>
            {/* Imprimo el atributo sabor de la Magdalena */}
            <p>{`Sabor: ${this.props.sabor}`}</p>
            {/* Llamo al estado del constructor */}
            <p>
               <span>Estado: </span>
               {this.state.magdalenaVendida ? "Vendido" : "A la venta"}
            </p>
            {/* Si el estado es true no se muestra el botón de comprar, de lo contrario se imprime */}
            {
                !this.state.magdalenaVendida && <button onClick ={this.estadoProducto}>Comprar</button>
            }
      
   </div>

        )
    }

}
export default MagdalenaClass