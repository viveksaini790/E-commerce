import { useState } from 'react';
import './profile.css'
import Model from './Model';

// import { useNavigate } from 'react-router-dom';
 

function UserProfile({close}) {
     const [showModel, setShowModel] = useState(false);

    // const user = JSON.parse(localStorage.getItem("name"));
     const user = JSON.parse(localStorage.getItem("userData"));
      console.log('user',user)
// const navigator=useNavigate()
    //  const editUser=()=>{
    //     navigator('/model')
         
    //  }
  return (
     <>
     
      <div className="profile-overlay">
      <button onClick={close}>❌</button>
      
     <div className='content'>
<h2>Name = {user.name}</h2>
<br />
      <p>Email = {user.emaildata}</p>
      <br />
      <p>Password = {user.password}</p>
      <br />
      <p>Number = {user.number}</p>
<br />

    
      <button onClick={()=>setShowModel(true)}>Edit</button>

        {showModel && (
        <Model onHide={() => setShowModel(false)} />
      )}
     </div>
    </div>
     
     </>
  )
}

export default UserProfile