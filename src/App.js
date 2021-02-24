import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks =['anwar', 'jafor', 'alomgir', 'salman', 'bappi', 'shuvo']
  const products = [
    {name:'Photoshop', price:'$80.90'},
    {name:'Illustrator', price:'$70'},
    {name:'pdf reader', price:'$7.00'},
    {name:'pdf r', price:'$7.00'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>My Heading</h2>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd =><Product products={pd}></Product>)
        }
        
        <Person></Person>
        
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  
  return (
    <div>
      <h3>Dynamic User {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px'

  }
  const {name, price} = props.products;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props) {
  const personStyle = {
    border: '2px solid orange',
    margin: '10px',
    padding: '10px',
    width: '300px',
    
  }
  return <div style={personStyle}>
    <h2>{props.name}</h2>
    <p>heroin: {props.nayika}</p>
  </div>

}

export default App;
