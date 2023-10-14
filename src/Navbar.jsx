import React from 'react'

function Navbar() {
  return (
    <>
    
<div className="navbar">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
    <div className="search-container">
        <form>
            <input type="text" placeholder="Search..."/>
            <button type="submit">Search</button>
        </form>
    </div>
</div>





    </>
  )
}

export default Navbar
