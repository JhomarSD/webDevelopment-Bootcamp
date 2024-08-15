import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje.js'


/*ESTOS SON LOS COMPONENTES*/
const Descripcion = () =>{
  return <p>Esta es la app hecha en el curso de react</p>
}


/*LOS COMPONENTES PUEDEN SER USADOS DENTRO DE OTROS COMPONENTES PERO NUNCA CREADOS DENTRO DE OTROS*/
const App =() =>{
  const a = 4
  const b = 4
 
  return(
    <div className = "App">
      <h1>Pagina con React</h1>
      <Mensaje color='blue' message='Estoy haciendo chocolate casero'/>
      <Mensaje color='red' message='Tenia tantas ganas de comerme un chocolate'/>
      <Mensaje color='gray' message='Solo si lo veo'/>
      <Descripcion/>

      <div>
        <p>ESTE ES EL RESULTADO</p>
        {a + b}
      </div>
    </div>
  )
}

export default App;
