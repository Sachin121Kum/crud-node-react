import styled from "@emotion/styled";
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import {editUser, getUsers} from '../service/api';
import {useNavigate,useParams} from 'react-router-dom' ;

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

const  EditUser = ()=>{

    const [user,setUserData] = useState(defaultDetails);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        loadUserDetails(()=>{

        })
    });
    const loadUserDetails = async()=>{
            const response = await getUsers(id);
            setUserData(response.data)
    }
    
    const oneValueChange = (e)=>{
        setUserData({ ...user, [e.target.name]:e.target.value })
    }
    const updateUserDetails = async ()=>{
       await editUser(user,id);
       navigate('/all')
    }

    return (
        <div>
            <Container>
            <Typography variant="h4" >Edit User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange= {(e)=>oneValueChange(e)} name="name" value={user.name}/>
                </FormControl>
                <FormControl>
                    <InputLabel>UserName</InputLabel>
                    <Input onChange={(e)=>oneValueChange(e)} name="username" value={user.username}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>oneValueChange(e)} name="email" value={user.email}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e)=>oneValueChange(e)} name="phone" value={user.phone}/>
                </FormControl>
                    <FormControl>
                    <Button variant="contained" onClick={updateUserDetails}>Update</Button>
                </FormControl>
            </Container>
            
        </div>
    )
}

export default EditUser;