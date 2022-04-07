import {useState} from "react";

function App() {
  //todo: presentar el conetopt de state
  //hooks
  const[inputState,setInputState] = useState({
    titulo:"",
    fecha:"",
    nota:"",

  });


  const handleInputChange = (event) => { 
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
    
  };

  const handleLimpiarClick = () => {
    setInputState(useState.titulo="asdasd");
  };
  

  return (
    <div className="App">
      <div className="row">
      <div className="col">
      <h3>Lista</h3>
      </div>
      <div className="col">
      <h3>notas</h3>
      </div>
      <label className="mb-2">Input de Titulos 
      <input id="titulo"
      name="titulo" 
      type="text" 
      onChange={handleInputChange} 
      value={inputState.titulo} 
      />
      </label>
          <br />
          <br />

      <label htmlFor="Fecha">INput de fecha </label>
      <input id="fecha" 
      name="fecha" 
      type="text" 
      onChange={handleInputChange} 
      value={inputState.fecha} 
      />
      <br />
      <br />

      <label htmlFor="notaID">INput de nota </label>
      <input id="nota" 
      name="nota" 
      type="text" 
      onChange={handleInputChange} 
      value={inputState.nota} 
      />

<div 
      style={{display: "flex", 
      justifyContent: "flex-end",
      marginRight:"5px"}}>
      <botton type="button" 
      class="btn btn-secondary" 
      onClick={handleLimpiarClick}>
        Limpiar
        </botton>

        
      </div>
      </div>
    </div>
  );
} 

export default App;
