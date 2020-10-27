import React, { useState, useEffect } from 'react';
import { db } from "../conf/firebase";

import "./UsersList.css";
import User from './User';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFilter] = useState(["All"]);

  useEffect(() => {
    console.log("effect");
    const unsub = db.collection("Users").onSnapshot(snapshot => {
      const allUsers = snapshot.docs.map(doc => ({
        ...doc.data()
      }));
      setUsers(allUsers);
    });
    return () => {
      unsub();
    };
  }, []);

  const filterByCountry = (e) => {
    setFilter(e.target.value);
  }

  const countries = users.map(user => { return user.location.country;});
  const sortedCountries = [...new Set(countries)];

  return (
    <>
      <div className="SelectBox">
        <label>Select by country : 
          <select id="countries_select" className="select-style"
            onChange={filterByCountry}>
              <option value="All">All</option>
            {
              sortedCountries.map(country => { 
                return (
                <option value={country}>{country}</option>);
              })
            }
          </select>
        </label>
      </div>
      <div className="UsersList">
          {users.filter((user) => {
            // eslint-disable-next-line eqeqeq
            return user.location.country == filtered || filtered == "All" })
            .map((user) => {
              return (
                <User key={user.email}
                    user_firstname={user.name.first}
                    user_lastname={user.name.last}
                    user_email={user.email}
                    user_cell={user.cell}
                    user_country={user.location.country}
                    user_city={user.location.city}
                    user_streetNb={user.location.street.number}
                    user_street={user.location.street.name}
                    user_pic={user.picture.thumbnail}
                    user_picHS={user.picture.large}
                />
              );
            })}
      </div>
    </>
  );
};

export default UsersList;