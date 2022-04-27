import React from "react";

function Parent(){
    const data = 'Data from parent';
    return(
        <div>
            <Child dataParentToChild = {data}/>
        </div>
    )
}

function Child (props){
    return(
        <div>
            {props.dataParentToChild}
        </div>
    )
}

export default Parent;