

function App() {
  return (
    <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked!")}} />;
    </div>
  );
}

export default App;
