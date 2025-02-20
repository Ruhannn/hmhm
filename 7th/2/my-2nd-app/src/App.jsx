import './App.css';
import Counter from './counter';
import Friends from './friends';



function App() {

  function handleClick() {
    alert('clicked');
  }

  const handleClick2 = () => {
    alert('clicked2'); 
  }

  const AddToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
    <div>
      <h1>Hello, World!</h1>
      <Counter></Counter>
      <div  className='container'>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert("third click")}}>Click Me 3</button>
      <button onClick={() =>AddToFive(3)}>Click Me 4</button>
      </div>
<Friends></Friends>
    </div>
    
    </>
  );
}
export default App;
