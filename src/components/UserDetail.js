import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchUserDetails } from "../utils/fetchData";
// import { LoaderName } from "react-awesome-loaders"
import "./UserDetail.css";

const UserDetail = () => {
  const { userId } = useParams();
  const { state } = useLocation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserDetails(userId);
      setUser(data);
    };
    fetchData();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <div className="user-detail-container">
        {state?.imageUrl && <img src={state.imageUrl} alt={user.name} className="user-image-detail" />}
        <div className="user-details">
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="a">{user.website}</a></p>
          <p><strong>For Map:</strong> <a href={`https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat}%2C${user.address.geo.lng}`} target="_blank" rel="noopener noreferrer" className="a">Click Here</a></p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
