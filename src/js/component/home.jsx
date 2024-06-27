import React, { useState, useEffect } from "react";
import Character from "./Character.jsx";

const URL_BASE = "https://rickandmortyapi.com/api"

//create your first component
const Home = () => {
	const [character, setCharacter] = useState([])


	// FORMA DE TRABAJO ASYNC AWAIT
	// const getCharacters = async () => {
	// 	try {
	// 		let response = await fetch(`${URL_BASE}/character`)
	// 		let data = await response.json()

	// 		setCharacter(data.results)
	// 		console.log(data)

	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }


	//FORMA DE TRABAJO THEN}

	const getCharacters = () => {
		fetch(`${URL_BASE}/character`)
			.then((response) => response.json())
			.then((data) => setCharacter(data.results))
			.catch((error) => console.log(error))
	}

	useEffect(() => {
		getCharacters()
	}, [])


	return (
		<div className="container">
			<div className="row">
				{
					character.map((item) => {
						return (
							<Character key={item.id} character={item} />
						)
					})
				}

			</div>
		</div>
	);
};

export default Home;

/*
C = Create -->        POST -->  body
R = Read(request) --> GET
U = Update -->        PUT -->   body 
D = Delete -->        DELETE --> identificador(url) 
*/