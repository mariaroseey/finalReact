import React from "react";
import Header from "../component/header";



export const About = () => {
  return (
    <div>
        <Header/>
        <div className="grid justify-center pt-7">
            <img className="w-[500px] h-[500px]" src="https://images.unsplash.com/photo-1713671164603-5529b29fa031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>

    </div>
  )
}

export default About
