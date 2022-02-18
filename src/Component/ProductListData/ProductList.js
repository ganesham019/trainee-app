import React from "react";
import { useState, useEffect } from "react";
import {addtocart} from "../../Redux/Shopping/shopping-action"
import {connect} from 'react-redux';
function ProductList({addtocart}) {
  const [prodtlist, SetProdtList] = useState("");
  console.log(prodtlist);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      SetProdtList(data);
    }
    getData();
  }, []);

  return (
    <div className=" text-center mx-auto bg-dark p-0 m-0">
      <div className="row p-0 m-0">
        {prodtlist &&
          prodtlist.map((prodt) => (
            <>
              <div className="col-md-2 col p-0 m-1">
                <div
                  className="card  p-2  text-center "
                  key={prodt.id}
                  style={{ width: "100%", height: "300px" }}
                >
                  <img
                    src={prodt.image}
                    className="text-center mx-auto"
                    alt=""
                    style={{ width: "120px", maxHeight: "140px" }}
                  />
                  <p
                    style={{ fontSize: "10px" }}
                    className="mb-0 text-secondary"
                  >
                    <b>{prodt.title}</b>
                  </p>
                  <p style={{ fontSize: "10px" }} className="text-danger mb-0">
                    Price:<b>$ {prodt.price}</b>
                  </p>
                  <p
                    style={{ fontSize: "10px" }}
                    className="text-capitalize text-danger mb-0"
                  >
                    {prodt.category}
                  </p>
                  <button className="text-white AddToCart p-1 mt-1 mb-1" onClick={()=>addtocart(prodt.id)}>
                    Add To Cart
                  </button>
                  <p className="text-white AddToCart2 p-1 ">View</p>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addtocart : (id)=> dispatch(addtocart(id))
  }
}
export default connect (null, mapDispatchToProps )(ProductList);
/*{
  <div className="">
                  <div className="card  bg-light shadow-md" key={prodtlist.id}  style={{ width: "200px", height: "200px" }}>
                    <img
                      src={prodtlist.image}
                      class=" "
                      alt={prodtlist.title}
                     
                    />
                    <p className="text-dark">
                      <b>{prodtlist.name}</b>
                    </p>
                    <p className="text-danger ">{prodtlist.price}</p>
                    <p className="text-muted">{prodtlist.description}</p>
                    <p>{prodtlist.category}</p>
                  </div>
                </div> 
}*/

// import React from "react";

// const ProductList = (prodtlist) => {
//   // console.log(prodtlist);
//   return <div className="mt-5"><p>{prodtlist.title}</p></div>;
// };

// export default ProductList;
