import { useEffect, useState } from 'react';
import {TableRow,TableHead,TableContainer,TableCell,Table,TableBody,styled,Button} from '@mui/material';
import {allUser,deleteUser} from '../service/api';
import { Link } from 'react-router-dom';

const AllUsers = ()=>{
    const [userData,setUsers]= useState([]);

    const StyledTable = styled(Table)`
        width:90%;
        margin:50px auto 0 auto;
    `;

    const StyledRow = styled(TableRow)`
        background:#000000;
        & > th {
            color:#fff;
            font-size: 20px;
        }
    `;

    useEffect(()=>{
        getAllUser();
    },[]);

    const getAllUser = async ()=>{
       const response =  await allUser();
       console.log(response.data)
       setUsers(response.data);
    } 

    const deleteUserDetails = async(id)=>{
        await deleteUser(id);
        getAllUser();

    }


    return (
        <div>
            <TableContainer> 
            <StyledTable>
                <TableHead>
                <StyledRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>UserName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>
                <Button>Action</Button>


                </TableCell>
                </StyledRow>
                </TableHead>
        <TableBody>
            {
                userData.map(user=>(
                    <TableRow key={user._id}>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.name}</TableCell>  
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                        <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                        <Button variant='contained' color='secondary'onClick={()=>deleteUserDetails(user._id)}>Delete</Button>

                </TableCell>

                    </TableRow>
                 ))
             }
    
            </TableBody>

            </StyledTable>
            </TableContainer>
        </div>
    )
}

export default AllUsers;