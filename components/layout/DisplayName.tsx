import React, { useState } from 'react'
import { auth } from '../../firebase.config'
import { FiUser} from 'react-icons/fi';
import Link from 'next/link';
import { Button, Modal } from 'antd';
import SignInForm from '../signIn/SignInForm';
import SingUpForm from '../signIn/SignUpForm';




const Display:React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [signIn , setSignIn] = useState(true)



  



  if(auth.currentUser !== null){
    const name = auth.currentUser.displayName
    console.log(auth.currentUser.displayName)
    console.log(name)
    return <Link href={'/user/dashboard'}><p className='text-3xl font-bold text-white align-middle m-0 cursor-pointer'>{name[0]}</p></Link> 
  }else{
    return  (<>
    <Button type="link" style={{ padding:'0'}}  onClick={() => setModal1Open(true)}>
   <FiUser color='white' size={25}/>
  </Button>
  <Modal
        footer={null}
        style={{ top: 30, border:'none', textAlign:'center', }}
        visible={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        
      >
        {signIn ? <SignInForm setSignIn={setSignIn} setOpen={setModal1Open}/> : <SingUpForm setSignIn={setSignIn} setOpen={setModal1Open}/>}
        </Modal>
    </> )
  }
}

export default Display