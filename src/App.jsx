
function App() {
  let varprueba= "TItulo";
  const handleChangePrueba = (event) => { 
    varprueba = event.target.value
    
  }
  
  return (
    <div className="App">
      <h3>notas</h3>
      <label htmlFor="pruebaID">INput de prueba</label>
      <input id="pruebaID" name="prueba" type="text" onChange={handleChangePrueba} value={varprueba} />
    </div>
  );
} 

export default App;
