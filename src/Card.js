import React from 'react'
import './App.css';

const Card = ({person}) => {
   const {id, name, city, country, title, employer, favoriteMovies} = person //turning these into variables to be easier to use in the return

    return(
        <div>
            <heading></heading>
            <p><strong>{id}/25</strong></p>
            <h1><strong><underline>{name.first} {name.last}</underline></strong></h1>
            <p><strong>From:</strong> {city}, {country}</p>
            <p><strong>Job Title:</strong> {title}</p>
            <p><strong>Employer:</strong> {employer}</p>
            <p><strong>Favorite Movies:</strong></p>
            <ol>
                <li>{favoriteMovies[0]}</li>
                <li>{favoriteMovies[1]}</li>
                <li>{favoriteMovies[2]}</li>
            </ol>
        </div>
    )
}

export default Card