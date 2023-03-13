import React from "react"

export const Hours = (props)=>{
    let hoursToString= JSON.stringify(props.prop)

    let arrayHours = hoursToString.split('')
    if(props.prop<10){
        arrayHours.unshift("0")
    }
    return(
        <div className="d-flex bg-warning text-white justify-content-center">
            <p className="p-2 m-1 border border-white rounded h1">{arrayHours[0]}</p>
            <p className="p-2 m-1 border border-white rounded h1">{arrayHours[1]}</p>
        </div>
    )
}

