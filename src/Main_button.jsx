import React from "react"
import "./index.css"
import { Icons } from "./Icons"

export const MainButton = ({link, name}) => {
    return (
        <>
        <div className="circle1">
            <a href={link} target="_blank" ><span><Icons icon={name} /></span></a>
        </div>
        </>
    )
}


