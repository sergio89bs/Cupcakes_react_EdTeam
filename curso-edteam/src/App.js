import './App.css';
// Importamos la carpeta de los componentes
import Magdalena from './components/magdalena';
import MagdalenaClass from './components/magdalena_class';

function App() {
    return (
       <div>
           <h1>EJEMPLO USANDO COMPONENTES FUNCIONALES</h1>
        {/* // EJEMPLO DE MADALENAS PARA CREAR COMPONENTES */}
        <div className='container-magdalenas'>
            <Magdalena color= "marron" sabor = "tradicional"/>
            <Magdalena color= "marron" sabor = "tradicional"/>
            <Magdalena color= "oscuro" sabor = "chocolate"  />            
            <Magdalena color= "oscuro" sabor = "chocolate"  />            
            <Magdalena color= "oscuro" sabor = "chocolate"  />            
            <Magdalena color= "oscuro" sabor = "chocolate"  />            
                      
        </div>
        <h1>EJEMPLO USANDO COMPONENTES DE CLASES</h1>
        <div className='container-magdalenas'>
            <MagdalenaClass color= "marron" sabor = "tradicional"/>
            <MagdalenaClass color= "marron" sabor = "tradicional"/>
            <MagdalenaClass color= "oscuro" sabor = "chocolate"  />            
            <MagdalenaClass color= "oscuro" sabor = "chocolate"  />            
            <MagdalenaClass color= "oscuro" sabor = "chocolate"  />            
            <MagdalenaClass color= "oscuro" sabor = "chocolate"  />            
                      
        </div>
        </div>
    );
}

export default App;