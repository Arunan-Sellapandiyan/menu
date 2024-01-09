import "./index.css";

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
    <div className="container">
      {/* <Profiler   />
       <List  name='abc'/> */}

      <Header />
      <Menu />
      <Footer />
    </div>
    //  <img src='pizzas/focaccia.jpg'  alt="logo" />
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Pizza</h1>
    </header>
  );
}
function Menu() {
  const Pizzas = pizzaData;
  const pizzano = Pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* //conditional rendering */}
      {pizzano !== 0 ? (
        <div className="pizzas">
          {pizzaData.map((pizza) => (
            //rendering method with intermediate
            (<>
            <Pizza pizzaobj={pizza}/>
            </>)

            //without intermediate
            // <div className="pizza">
            //   <img src={pizza.photoName} alt={pizza.name} />
            //   <h3>{pizza.name}</h3>
            //   <p>{pizza.ingredients}</p>
            //   <span>{pizza.price}</span>
            // </div>
          ))}
        </div>
      ) : (
        <p>currently working on it</p>
      )}

      {/* <img src='pizzas/focaccia.jpg'  alt="logo" />  */}
      {/* <h2 className='menu'>{List}</h2>  */}
    </main>
  );
}
// props==pizzaobj ----props Destructure.
function Pizza({pizzaobj}) {
  // if (pizzaobj.soldOut) return null;
  console.log(pizzaobj);
  return (
    <div className={`pizza ${pizzaobj.soldOut? "sold-out":""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <h3>{pizzaobj.name}</h3>
      <p>{pizzaobj.ingredients}</p>
      {/* {pizzaobj.soldOut? ("SOLD OUT"):(pizzaobj.price) } */}
      <span>{pizzaobj.soldOut? "SOLD OUT":(pizzaobj.price)}</span>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openTime = 10;
  const closedTime = 22;
  const isOpen = hour >= openTime && hour <= closedTime;
  console.log(isOpen);
  return (
    <footer className="footer">
      {/* Rendering using Ternary operator */}
      {isOpen ? (
        <Order openTime={openTime} closedTime={closedTime} />
      ) : (
        <p> shop is closed because time is Greaterthan {closedTime}</p>
      )}
    </footer>
  );
}
function Order(props) {
  return (
    <div className="order">
      <p>
        open time is {props.openTime} and closed time is {props.closedTime}
      </p>
      <button className="btn">Order now</button>
    </div>
  );
}

export default App;
