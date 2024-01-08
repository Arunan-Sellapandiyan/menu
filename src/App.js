import './index.css';

// import List from "./profile/List";
// import Profiler from "./profile/Profiler";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div className='container'>
        
        {/* <Profiler   />
       <List  name='abc'/> */}
    
        <Header/>
        <Menu />
        <Footer/>
    </div>
    //  <img src='pizzas/focaccia.jpg'  alt="logo" />
  );
}
function Header(){
  return <header className="header"><h1>Pizza</h1></header>
} 
function Menu(){
  // const List= pizzaData.map((e)=>e.name)
 
    return (<main className='menu'>
      <h2>Our Menu</h2>
      <div className='pizzas'>{pizzaData.map((pizza)=>(//rendering method with intermediate
      // <Pizza name={pizza.name} photoName={pizza.photoName}/>
      // <Pizza pizzaobj={pizza}/>
     
      //without intermediate
        <div className="pizza">
        <img src={pizza.photoName} alt={pizza.name}/>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      
        </div>
         ))}</div>
        
      {/* <img src='pizzas/focaccia.jpg'  alt="logo" />  */}
      {/* <h2 className='menu'>{List}</h2>  */}
      </main>
)
} 
function Pizza(props){
console.log(props);
  return(<></>
    // <div className="pizza">
    //   <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name}/>
    //   <h3>{props.pizzaobj.name}</h3>
    //   <p>{props.pizzaobj.ingredients}</p>
    //   <span>{props.pizzaobj.price}</span>
    
    //   </div>
  )
}
function Footer(){
  return <><h1 className="footer">Footer</h1>

      </>
}


export default App;
