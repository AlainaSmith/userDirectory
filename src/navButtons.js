// All the buttons and click functions will go in here 
import React from 'react'


const NavButtons = ({changePerson}) => {
   

return(
    <div>
        <button className='previous' onClick={() => {changePerson(-1)}}>Previous</button>
        <button className='new' onClick={()=>{}}>New</button>
        <button className='edit' onClick={()=>{}}>Edit</button>
        <button className='delete' onClick={()=>{}}>Delete</button>
        <button className='next' onClick={()=>{changePerson(1)}}>Next</button>
    </div>
)

}

export default NavButtons



