import './App.css';
import data from './data';
import React, { useState } from 'react'
import Card from './Card';
import NavButtons from './navButtons';


const App = () => {
  const [id, setId] = useState(data[0].id)
  const [person, setPerson] = useState(data[0])
  const [maxId] = useState(data[data.length - 1].id)

  const changePerson = (value) => { /* hello */
    if((value === -1 && id > 1) || (value === 1 && id < maxId)){ /* if we are decreasing the value, and the id is not 1, OR if we are increasing the value and the id is less than the maximum, then we can change the card without going too high or too low. */
      setId(value === 1 ? id + 1 : id - 1) /*if the value is equal to one, then we are going to increase the id by on, otherwise (: this is an else statement in line) we are going to subtract the id by 1 */
      setPerson(value === 1 ? data[id] : data[id-2]) /* */
    }
  }


return(
  <div>
    <Card person={person}/> 
    <NavButtons changePerson={changePerson}/>
  </div>
)




  // const [id, setId] = useState(1)
  // const [person, setPerson] = useState({})

  // const changePerson=()=>{
  //   for(let i=0; i<data.length; i++){
  //     if(data.id ===id){
  //       setPerson(data[i])
  //     }
  //   }
  // }

  // return (
  //   <div>
  //     <Display />
  //     <Card person={person}></Card>
  //     <Control id={id} setId={setId}></Control>
  //   </div>
  // );
}

export default App;
