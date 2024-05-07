import React from 'react'
import propTypes from "prop-types";

const User = ({name, surname, isLoggedIn, age, friends, address}) => {
  return (
    <div>
    <h1>{isLoggedIn ? name + " " + surname + " " + age : "Giriş Yapın!"}</h1>
    <h3>{address.city + " " + address.zip}</h3>
    {
        friends.map((friend, index) =>(
            <div key={index}>
            {friend}
            </div>
        ) )
    }
    </div>
  )
}

User.propTypes = {
    name : propTypes.string.isRequired,
    surname : propTypes.string.isRequired,
    address : propTypes.shape({
        city : propTypes.string,
        zip : propTypes.number
    })

}



export default User
