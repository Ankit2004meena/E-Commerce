import React from "react";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({items, cart , setCart}) => {
   
  const addToCart = (id,price,title,description,imgSrc) =>{
    const obj = {
      id,price,title,description,imgSrc
    }
    setCart([...cart, obj]);
    console.log("Cart element = ",cart)
    toast.success('Item added on cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }


  return (
    <>
    <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
{/* <div className="container my-5"> */}
  <div id="carouselExample" className="carousel slide ">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://financialquest.com.ng/wp-content/uploads/2018/07/computer-2.jpg" className="custom-img"  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.ed-29-ckMum--DpdlJRKHgHaFW?w=252&h=182&c=7&r=0&o=5&pid=1.7" className="custom-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src= "https://wallpaper.dog/large/5495546.jpg" className="custom-img" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
{/* </div> */}

</div>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
                  <div className="card" style={{ width: "18rem" }}>
                    <Link to={`/product/${product.id}`}
                     style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>

                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="..."
                      />
                      </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">
                        {product.price} ₹
                      </button>
                      <button
                      onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                       className="btn btn-warning"
                       >Add To Cart</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default Product;
