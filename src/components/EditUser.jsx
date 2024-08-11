

import { FormControl, FormGroup, Input, InputLabel, Typography,styled,Button } from '@mui/material'
import React,{useState, useEffect} from 'react'
import { editUser,getUser } from '../service/api';
import { useNavigate,useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
     width: 40%;
     margin: 5% auto 0 auto;
     & > div{
        margin-top: 20px;
     }
`; 

const defaultvalue = {
  name: "",
  username: "",
  email: "",
  phone: "",
}

function EditUser() {

  const[user, setUser] = useState(defaultvalue);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(()=> {
   loadUserDetails();
  },[])

  const loadUserDetails = async() => {
    const response = await getUser(id);
    setUser(response.data);
  }

  const onValueChange = (e) => {
       console.log(e.target.value); 
       setUser({ ...user, [e.target.name]: e.target.value})     
  }

  const editUserDetails = async() => {
      await editUser(user,id); 
      navigate('/all');   
  }

  return (
    <Container>
        <Typography variant='h4'>EditUser</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='name' value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={()=> editUserDetails()}>Edit User</Button>
        </FormControl>
    </Container>
  )
}

export default EditUser