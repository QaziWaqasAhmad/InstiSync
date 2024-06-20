import NavigationDrawer from '../../components/navigationDrawer'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'; 
import AddIcon from '@mui/icons-material/Add';
import InputBase from '@mui/material/InputBase';

const initialUsers = [
    {
      name: 'John Doe',
      role: 'Admin',
    },
    {
      name: 'Jane Smith',
      role: 'User',
    },
    {
      name: 'Bob Johnson',
      role: 'User',
    },
    
  ];

const User = () => {

    const [users, setUsers] = React.useState(initialUsers);
    const [searchQuery, setSearchQuery] = React.useState('');

  const handleDeleteUser = (name) => {
    
    const updatedUsers = users.filter((user) => user.name !== name);
    setUsers(updatedUsers);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
       <NavigationDrawer>
        <h1>Users</h1>
        <Paper
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            margin: '1rem 0',
          }}
        >
          <InputBase
            placeholder="Search Users"
            sx={{ flex: 1, ml: 2 }}
            value={searchQuery}
            onChange={handleSearch}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="create user">
            <AddIcon />
          </IconButton>
        </Paper>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell align="right"><EditIcon style={{cursor: 'pointer' }}/></TableCell>
              <TableCell align="right"><ClearIcon style={{cursor: 'pointer' }} onClick={() => handleDeleteUser(row.name)}/></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
       </NavigationDrawer>
      
    </div>
  )
}

export default User
