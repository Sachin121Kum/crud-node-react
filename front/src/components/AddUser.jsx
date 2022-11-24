import styled from "@emotion/styled";
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material";
import { useState } from "react";
import {addUser} from '../service/api';
import {useNavigate} from 'react-router-dom' ;

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    
`;


const defaultDetails = {
    name:'',
    username:'',
    email:'',
    phone:''
}

const  AddUser = ()=>{

    const [user,setUserData] = useState(defaultDetails);
    const navigate = useNavigate();
    
    const oneValueChange = (e)=>{
        setUserData({ ...user, [e.target.name]:e.target.value })
        console.log(user)   
    }
    const AdduserDetails = async ()=>{
       await addUser(user);
       navigate('/all')
    }

    return (
        <div>
            <Container>
            <Typography variant="h4" >Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange= {(e)=>oneValueChange(e)} name="name"/>
                </FormControl>
                <FormControl>
                    <InputLabel>UserName</InputLabel>
                    <Input onChange={(e)=>oneValueChange(e)} name="username"/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>oneValueChange(e)} name="email"/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e)=>oneValueChange(e)} name="phone"/>
                </FormControl>

                    <FormControl>
                    <Button variant="contained" onClick={AdduserDetails}>Submit</Button>
                </FormControl>
            </Container>
            
        </div>
    )
}

export default AddUser;