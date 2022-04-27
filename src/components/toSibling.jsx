import React, { useState, useContext } from "react";

export const MContext = React.createContext();

class MyProvider extends React.Component {
    state = {message: ""}

    render () {
        return (
            <MContext.Provider value = {
                {   state: this.state,
                    setMessage: (value) => this.setState({
                                message: value
                    })}}>
                {this.props.children}
            </MContext.Provider>
        )
    }
}

class ToSibling extends React.Component {
    render() {
        return (
            <div>
                <MyProvider>
                    <Child1 />
                    <Child2 />
                </MyProvider>
            </div>
        )
    }
}

class Child1 extends React.Component {
    render() {
        return (
            <div>
                <MContext.Consumer>
                    {(context) => (
                        <button onClick={() => {context.setMessage("Data from sibling")}}>Send</button>
                    )}
                </MContext.Consumer>
            </div>
        )
    }
}

class Child2 extends React.Component {
    render() {
        return (
            <div>
                <MContext.Consumer>
                    {(context) => (
                        <p>{context.state.message}</p>
                    )}
                </MContext.Consumer>
            </div>
        )
    }
}

// --------------------------------------------
// yg dibawah salah

// export const Context = React.createContext({value: null, setValue: () => {} })

// const ToSibling = () => {
//     const [value, setValue] = useState(null);

//     return (
//         <Context.Provider value={{value, setValue}}>
//             <Sibling1 />
//             <Sibling2 />
//         </Context.Provider>
//     );
// }

// const Sibling1 = () => {
//     const {setValue} = useContext(Context);

//     const handleChange = event => {
//         setValue(event.target.value);
//     };
    
//     return (
//         <form>
//             <input onChange={handleChange}>Name</input>
//             <button onClick={handleChange}>Go!</button>
//         </form>
//     )
// }

// const Sibling2 = () => {
//     const {value} = useContext(Context);

//     return <h1>{value}</h1>
// }

export default ToSibling;