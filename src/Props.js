import React from "react"
//the props is an object //
// export default function (props) {
//     const handleIncreaseCounter = () => {
//         props.setCounter(props.counter + 1)
//     }
//     return (
//         <div>
//             <button onClick={props.setAlert("this meesage from child")}>
//                 {props.name}
//             </button>
//             <h1>{props.counter}</h1>
//             <button onClick={handleIncreaseCounter}>increase counter</button>
//         </div>
//     )
// }

const propfunction = (props) => {
    const handleIncreaseCounter = () => {
        props.setCounter(props.counter + 1)
    }
const handleIncreaseCounterByNumber=(number)=>{
    props.setCounter(number)


}
    return (
        <div>
            {/* onClick always use function 
            three way
            inline function one method 
            1. ()=>..... // 
            2. function() {} 
            3. name of the function  */}
            <button onClick={()=>{props.setAlert("hello mother fuckers")}}>{props.name}</button>
            <h2>{props.name}</h2>
            <h1>{props.counter}</h1>
            <button onClick={handleIncreaseCounter}> add 1</button>
            <button onClick={handleIncreaseCounterByNumber(90)}> add by 90 </button>

        </div>
    )
}
export default propfunction;
// Arrow Function
// const nameOfFunction = (parameters) =>{
    // return()
// } exoprt default nameOfFunction;


// onClick={handleIncreaseCounter} ==== onClick={()=>handleIncreaseCounter()}

// correct way to call the function 
// onClick={()=>fun1(90)}
// onClick={fun1}

// false way to call the function 
// onClick={fun1()}
// onClick={fun1(90)}

/////
// after render the page will run this function 
// const s= ()=>p() // function
// // first function run in the page or the site, every rernder in the page will render again without call it by default will render...
// const s= p() 







