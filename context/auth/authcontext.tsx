import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {auth} from '../../firebase.config'
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User, UserCredential } from 'firebase/auth'
import React from 'react'
// import { toast } from 'react-toastify'

export interface AuthContextProvider {
  children?:ReactNode
} 

export interface AuthContextM {
  // auth:Auth
  user:User | null
  Dname:string
  // signIn: (email:string, password:string) => Promise<UserCredential>
  // signUp: (email:string, password:string) => void
}




export const AuthContext = React.createContext<AuthContextM>({} as AuthContextM)

// export const useAuth = (): AuthContextM => {
//   return useContext(AuthContext)
// }



export const AuthContextProvider = ({children}:AuthContextProvider):JSX.Element => {

  const [user, setUser] = useState<User | null>(null)
  const [Dname, setName] = useState('')

  // const signIn = (email:string, password:string) => {
  //     return signInWithEmailAndPassword(auth ,email, password)
  // }
  // const signUp = async(email:string, password:string,) => {
  //  await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
  //     const user = userCredential.user
  //   }).catch((error) => {toast.error('hi')});
  // }

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged(() => {
      setUser(user)
      if(auth.currentUser){
        const displayName = auth.currentUser.displayName
        setName(displayName)
      }
    })


    return unsubsribe
  }, [])

  


  const values = {
   
    user,
    Dname
  }


  return (
    <AuthContext.Provider value={values}>
    {children}
  </AuthContext.Provider>
  )
}