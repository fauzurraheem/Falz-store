import React, { useContext, useState } from 'react'
import { AuthContext, AuthContextM } from '../context/auth/authcontext'
import { auth } from '../firebase.config'
import { FiUser} from 'react-icons/fi';
import Link from 'next/link';
import { Props } from './SingIn';




const Display:React.FC<Props> = ({setIfUser}) => {
  if(auth.currentUser !== null){
    const name = auth.currentUser.displayName
    console.log(auth.currentUser.displayName)
    console.log(name)
    return <p>{name[0]}</p>
  }else{
    return <FiUser color='white' size={30} onClick={() => setIfUser(!false)} />
  }
  
  // const user = auth.currentUser;
  // if (user !== null) {
  //   // The user object has basic properties such as display name, email, etc.
  //   const displayName = user.displayName;
  //   const email = user.email;
  //   const photoURL = user.photoURL;
  //   const emailVerified = user.emailVerified;
  
  //   // The user's ID, unique to the Firebase project. Do NOT use
  //   // this value to authenticate with your backend server, if
  //   // you have one. Use User.getToken() instead.
  //   const uid = user.uid;
  // }

//  return (
//   <>
//     {/* {user ? <Link href={'/user/dashboard'}><p className='font-semibold text-3xl text-white'></p> </Link>  : (<FiUser color='white' size={30} onClick={(e) => setIfUser(!false)} />)} */}
//     <p>{name}</p>
//   </>
// )

  
}

export default Display