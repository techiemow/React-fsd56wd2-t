import Shopnavi from "./components/shopnavi"
import ShopHead from "./components/ShopHead"
import ShopFoot from "./components/ShopFoot"
import ShopCard from "./components/ShopCard"
import { useState } from "react"

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  
  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  
  // Function to remove an item from the cart
  const removeFromCart = (itemToRemove) => {
    // It adds all the items other than the item to be removed and removes the selected item
    setCartItems(cartItems.filter(item => item.id !== itemToRemove.id));
  };
  




  const datas = [
    {
      id: 1,
      type: "phone", // Enclose in quotes
      title: "Iphone",
      price: "₹50000-₹2000000",
      rating: "⭐⭐⭐⭐⭐",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSic8v5_RwEwACMk-1QTzk7BQHk7ZFDwCgRmw&usqp=CAU",
    },
    {
      id: 2,
      type: "phone", // Enclose in quotes
      title: "Samsung",
      price: "₹20000-₹2000000",
      rating: "⭐⭐⭐⭐½",
     
      img: "https://cdn.mos.cms.futurecdn.net/Abyf8teaRLS7zqd2NQ3Z7k.jpg",
    },
    {
      id: 3,
      type: "phone", // Enclose in quotes
      title: "Redmi",
      price: "₹7000-₹80000",
      rating: "⭐⭐⭐⭐",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/4/303514615/EQ/GL/MY/188256935/xiaomi-redmi-note-12-pro-5g-256gb-8gb-ram-gsm-unlocked-global-version-new--500x500.jpg",
    },
    {
      id: 4,
      type: "laptop", // Enclose in quotes
      title: "HP",
      price: "₹50000-₹2000000",
      rating: "⭐⭐⭐⭐⭐",
      img: "https://www.reliancedigital.in/medias/HP-Pavilion-eh3055AU-493838238-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjA1NHxpbWFnZS9qcGVnfGltYWdlcy9oMmUvaDdjLzEwMDIxNTEzMTk5NjQ2LmpwZ3wxMmJlNjdhOGYzZjk4MTQ2MTQ1NThmMjIxZTM4NmY0ZWM0YWYxMWQwYTJjMWMzNmM3NzVjMTM2MTVmZDJkOTQ1",    
    },
    {
      id: 5,
      type: "laptop", // Enclose in quotes
      title: "Dell",
      price: "₹25000-₹2000000",
      rating: "⭐⭐⭐⭐ ½",
      img: "https://m.media-amazon.com/images/I/615seuEXFtL.jpg",
    },
    {
      id: 6,
      type: "tablet", // Enclose in quotes
      title: "Samsung",
      price: "₹50000-₹2000000",
      rating: "⭐⭐⭐⭐½",
      img: "data:image/jpeg;base64,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H65VfLpR/JMwlwqqy/8AIhH1YSX0J345rRs9c/zsf5U/hepZIry1Ua/5p0aa/wCKbLMeD1XXP9FprbWlOs1vNI6b78cvDvZdCdWPwRwry1l4Vzj6yqS+KHrPOjSNgt1frvf7Z+0w2BWdpBYVbyUtsLbClHo71YklHKdnRf8A29rjLzlXDF++WLOjhe2EddfH0KE+wkWXsnw1Z8/yNL+ZE1Vc4j55dNrY9gte9E/SHc1cvXdTRHCnHZCOL6yt+hVajxnKU3/FJtdR10uGFCP7ul75Fapwyk/BzY9CZjVGe+uflo7aNq2a1/DimOrZqGSkteCLUYUaeuUetGh1eEtSWub92KK8ss463j04mXq7cd0KV+kYq956DPK1CHg98/QVKuX5PRCKRpH3stvxMllZeV8Ss/s56r9NXHq2HKV9UnTqZ0ng4S0flZsH/T/+8yh6lp8ah57WymnCSztcWsMHyo9D+wCLz8oPDRm2ix5McaugUOHaaomYxL2kAF3MAAAAAPN8tfZFYXFaVWnUq22fKUp06ebKGe222k9S06jr+JK155cblM9YAHk/Ela88uNymOJK155cblM9YAHk/Ela88uNymOJK155cblM9YAHk/Ela88uNymOJK155cblM9YAHk/Elac8uNymOJK155cblM9YAHk/Elac8uNymOJK055cblM9YAHk/Elac8uNymOJK155cblM9YAHk/Ela88uNymOJK155cblM9YAHk/Ela88uNymOJK155cblM9YAHk/Ena88uNymOJO155cblM9YAHlC+xO155cblM3zgzwctsnUe428Wk3nTnJ4zqS8qT+h3YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=",
    },
    {
      id: 7,
      type: "Ipad Mini", // Enclose in quotes
      title: "Redmi",
      price: "₹60000-₹180000",
       rating: "⭐⭐⭐⭐½",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0yb90DWt-2rMB8AXSI1jzZEJHvQAcS_w2g&usqp=CAU",
    },
    {
      id: 8,
      type: "headphones", // Enclose in quotes
      title: "Sony",
      price: "₹50000-₹2000000",
      rating: "⭐⭐⭐⭐⭐",
      img: "https://cdn.mos.cms.futurecdn.net/FhuVKfguQuDshEgiW6LHSa-1200-80.jpg",    
    },
    {
      id:9,
      type:"AirPods",
      title:"Apple",
      price:"₹10000-₹35000",
      rating: "⭐⭐⭐⭐½",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcchmXAkRU3ohWcso2rQw9W7xw8bH5pNj8yg&usqp=CAU"
    },
    {
      id:10,
      type:"Watch series-6",
      title:"Apple",
      price:"₹30000-₹95000",
      rating: "⭐⭐⭐⭐⭐",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BhyNi9LssgcXo84VP5hol9SI7XJ8QXQAng&usqp=CAU"
    }
  ];
  return (
   
    <div className="container-fluid">
      <Shopnavi cart={cartItems.length} />
      <ShopHead />
      <ShopFoot />
      
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {datas.map((data) => (
            <ShopCard
              key={data.id}
              data={data}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={cartItems.some(item => item.id === data.id)} // Check if item is already in cart
            />
          ))}
        </div>
      </div>
      
    </div>
   
  );
};

export default App;