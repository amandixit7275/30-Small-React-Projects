import React from "react";
import { useState, useEffect } from "react";
import User from "./User";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("amandixit7275");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    console.log(data);

    if (data) {
      setUserData(data);
      setLoading(false);
      setUserData("");
    }

    useEffect(() => {
      fetchGithubUserData();
    }, []);
  }

  console.log(userData);

  function handleSubmit() {
    fetchGithubUserData();
  }
  if (loading) {
    return <h1>Loading data ! Please wait...</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
