import React from "react";


const Character = ({ character }) => {

    return (
        <div className="col-12 col-md-4">
            <div className="card">
                <img src={character.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">{character.species}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Character;