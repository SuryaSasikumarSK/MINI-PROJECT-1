import react from "react";
import "./productstyle.css";
// export default function Product() {

// }

const Product = () => {
  const products = [
    {
      name: "Product 1",
      description: "This is Product 1",
      price: 99.99,
    },
    {
      name: "Product 2",
      description: "This is Product 2",
      price: 199.99,
    },
    {
      name: "Product 3",
      description: "This is Product 3",
      price: 299.99,
    },
    {
      name: "Product 4",
      description: "This is Product 4",
      price: 399.99,
    },
    { name: "Product 5", description: "This is Product 5", price: 499.99 },
    { name: "Product 6", description: "This is Product 6", price: 599.99 },
    { name: "Product 7", description: "This is Product 7", price: 699.99 },
    { name: "Product 8", description: "This is Product 8", price: 799.99 },
  ];
  return (
    <>
      <div className="container title">
        <h1 className="title-h1">products</h1>
      </div>
      <div className="container">
        <h2>Available Products</h2>
        </div>
        <div className="product-container">
            {products == null || products.length === 0 ? (<h1>No products available</h1>) : (
                products.map((product, index) => {
                    return (
                        <div key={index} className="product-card">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                    );}
                ))}
        </div>
    </>
  );
};

export default Product;
