import React from 'react';
import Axios from "axios";
import { useEffect, useState } from "react";

//npm package
import { styled } from '@mui/material/styles';
import * as MUI from '@mui/material';
import * as MICON from '@mui/icons-material';
import { useDispatch } from 'react-redux'

//components
import UserAddFormDialog from './Components/UserAddFormDialog';
import ConfirmDialog from './Components/ConfirmDialog';
import UserUpdateFormDialog from './Components/UserUpdateFormDialog';

//reducer
import { getUserDataToUpdate } from './Redux/UpdateUser/UpdateUserReducer'

const StyledTableCell = styled(MUI.TableCell)(({ theme }) => ({
  [`&.${MUI.tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${MUI.tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function App() {

  const dispatch = useDispatch()

  const [users, setUsers] = useState([])
  const [addFormOpen, setAddFormOpen] = useState(false)
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const [delId, setDelId] = useState('')
  const [updateUserData, setUpdateUserData] = useState('')
  const [updateFormOpen, setUpdateFormOpen] = useState(false)

  const fetchAllUsers = async () => {
    await Axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function addFormClose() {
    setAddFormOpen(false)
  }

  const AddNewUsers = async (name, email, phone) => {

    await Axios.post('https://jsonplaceholder.typicode.com/users', { name, email, phone }, { headers: { 'Content-type': 'application/json; charset=UTF-8' }, })
      .then(res => {
        setUsers((users) => [...users, res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }

  function confirmDialogToOpen(id) {
    setDelId(id)
    setConfirmDialogOpen(true)
  }

  function confirmDialogClose() {
    setConfirmDialogOpen(false)
  }

  const DeleteUser = async (id) => {
    await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`, { headers: { 'Content-type': 'application/json; charset=UTF-8' }, })
      .then(res => {
        setUsers(users.filter((user) => {
          return user.id !== id
        }))
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handleUpdateUser(user) {
    dispatch(getUserDataToUpdate(user))
    setUpdateUserData(user)
    setUpdateFormOpen(true)
  }

  const updateUser = async (id, name, email, phone) => {

    await Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, { id, name, email, phone }, { headers: { 'Content-type': 'application/json; charset=UTF-8' }, })
      .then(res => {
        const index = users.findIndex((user) => user.id === res.data.id);
        const newUsers = [...users];
        newUsers[index] = res.data;
        setUsers(newUsers)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function updateFormClose() {
    setUpdateFormOpen(false)
  }

  useEffect(() => {

    fetchAllUsers()

  }, []);

  // console.log(users)

  return (
    <div>
      <MUI.Grid container justifyContent='center'>

        <MUI.Grid item lg={12} md={12} sm={12}>
          <MUI.Typography variant='h4' align='center' style={{ marginTop: '1rem' }}>To-do List</MUI.Typography>
        </MUI.Grid>

        <MUI.Grid item lg={10} md={12} sm={12} style={{ margin: '2rem 2rem 0rem' }}>

          <MUI.Button
            color='primary'
            variant='outlined'
            startIcon={<MICON.Add />}
            onClick={() => setAddFormOpen(true)}
            style={{ margin: '0rem 0rem 1rem' }}
          >
            Add New
          </MUI.Button>

          <MUI.Table style={{ margin: '0rem 0rem 3rem' }}>
            <MUI.TableHead>
              <MUI.TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">User Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Phone</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </MUI.TableRow>
            </MUI.TableHead>
            <MUI.TableBody>
              {
                users && users.map((user, index) => (
                  <MUI.TableRow key={index}>
                    <MUI.TableCell align="center">{index + 1}</MUI.TableCell>
                    <MUI.TableCell align="center">{user.name}</MUI.TableCell>
                    <MUI.TableCell align="center">{user.email}</MUI.TableCell>
                    <MUI.TableCell align="center">{user.phone}</MUI.TableCell>
                    <MUI.TableCell align="center">

                      <MUI.Button
                        variant="outlined"
                        style={{ margin: '0rem 1rem' }}
                        onClick={() => handleUpdateUser(user)}>
                        Edit
                      </MUI.Button>

                      <MUI.Button
                        variant="outlined"
                        onClick={() => confirmDialogToOpen(user.id)}
                      >
                        Delete
                      </MUI.Button>

                    </MUI.TableCell>
                  </MUI.TableRow>
                ))
              }
            </MUI.TableBody>
          </MUI.Table>

          <UserAddFormDialog
            open={addFormOpen}
            addFormClose={addFormClose}
            addNewUser={AddNewUsers}
          />

          <ConfirmDialog
            open={confirmDialogOpen}
            confirmDialogClose={confirmDialogClose}
            id={delId}
            deleteFunction={DeleteUser}
          />

          <UserUpdateFormDialog
            open={updateFormOpen}
            updateFormClose={updateFormClose}
            updateUserData={updateUserData}
            updateUser={updateUser}
          />

        </MUI.Grid>

      </MUI.Grid>
    </div>
  )
}

export default App
