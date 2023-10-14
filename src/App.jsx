import React, { useState, useEffect } from 'react'
import gal from '../img/gal-1.jpeg'
import gal13 from '../img/house-1.jpeg'
import house4 from '../img/house-4.jpeg'
import Navbar from './Navbar';


function App() {


  const[theme, setTheme] = useState("lighttheme");
  const mode = () =>{
    theme === "darktheme"? setTheme("lighttheme")
    :setTheme("darktheme")
  }

 

  useEffect(() => {
    document.body.className=theme
  }, [theme]);


  return (
    <>
  
     <Navbar/>
   

      <div className='' id='theme'>
    

      {theme==="darktheme"?
         <button onClick={mode} >
           Enable LightTheme
         </button>
         :
         <button onClick={mode}>
            Enable Darktheme 
         </button>
      }

     <h1 >BOOKFOLIO</h1>
     

      
      <div style={{display:'flex',
      justifyContent: 'space-between'
      
      }}>
      <img src={gal} alt="" style={{ width: '30%'}} />
      <img src={gal13} alt="" style={{width: '30%'}} />
      <img src={house4} alt="" style={{width: '30%'}} />
</div>
    
    </div>
    </>
  )
}

export default App
