function printHello(){
    console.log("Hello from Button component!");
}
function printBye(){
    console.log("Bye from Button component!");
}
export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click Me!</button>
            <p onMouseOver ={printBye}>this para is for event demo</p>
        </div>
    );
}