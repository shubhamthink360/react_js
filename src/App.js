// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  const test = "this is a test variable";
  const testBool = true;
  return (
    
    <>  <Header title="Default props and isRequired Test"/>     
      <div className="container">
        <h4 className="text-bold">{test}</h4>
        <h2 className="text-bold text-center">Hello from Backend</h2>
        { testBool ? <p className="text-bold font-12">Paragraph Test</p> : " " } 
      </div>
    </>
  );
}
export default App;
