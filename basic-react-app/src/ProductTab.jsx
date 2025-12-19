import Product from "./Product.jsx";

function ProductTab(){
let styles ={
   display: "flex",
   flexWrap:"WWrap",
   justifyContent:"Center",
   alignItems:"center",

}
return(
<>
<h2>BlockBuster Deal | Shop Now</h2>
<div style={styles}>
    
    <Product title="Logitech MX Master" idx={0} />
    <Product title="Apple Pencil(2nd Gen)" idx={1} />
     <Product title="Zebronics Zeb-transformer" idx={2} />
      <Product title="Petronics Toad 23" idx={3} />
    </div>
</>
    
);





// let options =["hi-tech","durable","fast"];
//     let option2={a: "hi-tech",b: "durable", c:"fast"}
//     return(
//         <>
//         <Product title="Phone" price={30000} features={options} />
//      <Product title="laptop" price={40000} features={options} features2 ={option2}/>
//         <Product title="pen" price={10}  features={options} features2 ={option2}/> 
//         </>
//     );
}
export default ProductTab;