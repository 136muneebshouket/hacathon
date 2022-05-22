import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Menuitem.styles.scss';
// import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
export default function Menuitem({ title, imageUrl, size, history, linkUrl, match }) {
  const navigate= useNavigate();
 const Navigate = () =>{

  let login = localStorage.getItem('login')
    if(!login){
  navigate('signup')
    }
    else{
      navigate(linkUrl)
    }
 }
// const [link,setLink]=useState('')

// const Navigate = () =>{
//   let login = localStorage.getItem('login')
//       if(!login){
//        alert('login first')
//       }
//       else{
//         setLink(linkUrl)
//       }
// }


  return (<>
    
     <div
    className={`${size} menu-item`}
   
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div onClick={Navigate} className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      {/* <a href={link} className='subtitle'>SHOP NOW</a> */}
      <span  className='subtitle'>SHOP NOW</span>
    </div>
  </div>
 </>
  )
}
