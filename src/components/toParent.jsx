import React from "react";

// class Parent1 extends React.Component{
//     // constructor(props){
//     //     super(props);
//     //     this.state = {
//     //         data: null
//     //     }
//     // } //yang ini terlalu panjang -_-

//     state = {data: null} // pake {data: ""} juga bisa

//     handleCallback = (childData) =>{
//         this.setState({data: childData})
//     }

//     render(){
//         const {data} = this.state;

//         return(
//             <div>
//                 <Child parentCallback = {this.handleCallback}/>
//                 {data} {/*{this.state.data} gini juga bisa tanpa perlu const diatas*/}
//             </div>
//         )
//     }
// }

// class Child extends React.Component{

//     onTrigger = (event) => {
//         this.props.parentCallback("Data from child");
//         event.preventDefault();
//     }

//     render(){
//         return(
//             <div>
//                 <form onSubmit = {this.onTrigger}>
//                     <input type = "submit" value = "Submit"/>
//                 </form>
//             </div>
//         )
//     }
// }

// ---------------------------------------------------------
// beda tapi mirip sama yang atas

class Parent1 extends React.Component {
    state = { message: "" }

    callbackFunction = (childData) => {
        this.setState({message: childData})
    }

    render() {
        return (
            <div>
                <Child1 parentCallback = {this.callbackFunction}/>
                <p> {this.state.message} </p>
            </div>
        );
    }
}


class Child1 extends React.Component{
    sendData = (event) => {
        this.props.parentCallback("Data from child");
        event.preventDefault(); // kalo ga pake ini, nanti dia kea blip gitu (kl lupa, coba ga pake)
    }

    render() { 
        return (
            <div>
                <form onSubmit = {this.sendData}>  {/*perlu pake this.*/}
                    <input type = "submit" value = "Send"/>
                </form>
            </div>
        )
    }
};

export default Parent1;