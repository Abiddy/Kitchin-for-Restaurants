import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import UserHome from "./JobSeekerHome";
import RestaurantHome from "./RestaurantHome";
import Navbar from "./Navbar";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
      setType(data.type);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  if (type === "user") {
    return (
      <div>
        <Navbar />
        <UserHome />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <RestaurantHome />
    </div>
  );

  // <div>

  //   <div className="dashboard">
  //     <div className="dashboard__container">
  //       Logged in as
  //       <div>{name}</div>
  //       <div>{type}</div>
  //       <div>{user?.email}</div>
  //       <button className="dashboard__btn" onClick={logout}>
  //         Logout
  //       </button>
  //     </div>
  //   </div>
  // </div>
}

export default Dashboard;
