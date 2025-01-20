import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../utils/fetchData";
import Pagination from "./Pagination";
import { FaCity, FaEnvelope } from "react-icons/fa";
// import ThemeToggle from "./ThemeToggle";
import "./Home.css";


const imageUrls = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg"
];

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    fetchData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    return sortOrder === "A-Z"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  return (
    <div className="home">
      <div className="search-sort-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <button className="search-icon">
          <FaSearch />
        </button> */}
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="A-Z">Sort A-Z</option>
          <option value="Z-A">Sort Z-A</option>
        </select>
        {/* <button className="sort-icon">
          {sortOrder === "A-Z" ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
        </button> */}
      </div>
      <ul className="user-list">
        {currentUsers.map((user, index) => (
          <li key={user.id} className="user-item">
            <Link to={`/user/${user.id}`} state={{ imageUrl: imageUrls[index] }}>
              <img
                src={imageUrls[index % imageUrls.length]}
                alt={`${user.name} avatar`}
                className="user-avatar"
              />
              <div className="user-info">
                <h3>{user.name}</h3>
                <p>
                  <FaEnvelope /> {user.email}
                </p>
                <p>
                  <FaCity /> {user.address.city}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
