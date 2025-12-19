import "./Product.css";
import Price from "./Price";

function Product({title,idx}){
let oldPrices =["12,495","11,900","1,599","599"];
let newPrices=["8,999","9,199","899","278"];
let Description =[
    ["8,000 DPI" , "5 Programmable Buttons"],
    ["intuitive surface","designed for iPad Pro"],
   [ "designed for iPad Pro","intuitive surface"],
    ["Wireless","optical orientation"],
];
return(
    <div className="Product">
        <h4>{title}</h4>
        <p>{Description[idx][0]}</p>
        <p>{Description[idx][1]}</p>
         <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
);












    // console.log(features);
    // const list = features.map((feature)=><li>{feature}</li>);
    // let isDiscount = price>30000;
    // let styles ={backgroundColor:isDiscount?"yellow":""};
    //      return(
    //     <div className="Product" style={styles}>
    //         <h3>{title}</h3>
    //         <h5>Price :{price}</h5>
    //         {/* <p>{features.map((feature)=><li>{feature}</li>)}</p> */}
    //        { isDiscount&&<p>"Discount of 5%"</p>}
          
    //     </div>
    // );
    
   
}
export default Product;