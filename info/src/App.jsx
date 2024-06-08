import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import UserList from './components/UserList';
import SearchHistory from './components/SearchHistory';
import SearchBar from './components/SearchBar';


function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerms, setSearchTerms] = useState(
    JSON.parse(localStorage.getItem('searchTerms')) || []
  );
  
  const getData = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const {data} = res;
    setUsers(data);
    setFilteredUsers(data);
  }
  useEffect(()=>{
    getData();
  },[]);
  const handleSearch = (searchTerm) =>{
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(result);
  
    const updatedSearchTerms = [searchTerm, ...searchTerms];
    setSearchTerms(updatedSearchTerms);
    localStorage.setItem('searchTerms', JSON.stringify(updatedSearchTerms));
  };
    const handleSort = () => {
      const sortedUsers = [...filteredUsers].sort((a,b)=>
      a.name.localeCmpare(b.name));
      setFilteredUsers(sortedUsers);
    };
  
  
  return (
    <>    
      <div className="App">
      <h1>User Information</h1>
      <SearchBar onSearch={handleSearch} />
      <button onClick={handleSort}>Sort by Name</button>
      <SearchHistory searchTerms={searchTerms} />
      <UserList users={filteredUsers} />
    </div>
    </>
  )
}

export default App
