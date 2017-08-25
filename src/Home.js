import React from 'react'



const Home = props => {
  const allUsers = props.users.map((user)=>{
    return <li>{user}</li>
  })

  return(
    <div>
    <h1>{props.description}</h1>
    <ul>
      {allUsers}
    </ul>
    </div>
  )
}

export default Home
