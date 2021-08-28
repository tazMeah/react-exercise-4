import { useState } from "react";
import Table from "react-bootstrap/Table";

interface Pets {
	name: string;
	type: string;
	id: number;
}

export default function ArraysEx() {
	const [colors, setColors] = useState<string[]>(["red", "orange", "yellow"]);
	const [pets, setPets] = useState<Pets[]>([
		{ name: "Des", type: "cat", id: 102 },
		{ name: "Troy", type: "cat", id: 304 },
		{ name: "Cedes", type: "dog", id: 529 },
	]);

	function addColor(color: string): void {
		/* copy then modify */
		const newColors = [...colors];
		newColors.push(color);
		setColors(newColors);
	}

	/* Extended Challenge */
	function deletePet(id: number): void {
		/* copy then modify */
		const newPets = [...pets];
		// get the index that matches the id we're passing in
		let indexOfPetToDelete = newPets.findIndex((pet) => pet.id === id);
		// delete that pet from our array
		newPets.splice(indexOfPetToDelete, 1);
		// change the state
		setPets(newPets);
	}

	return (
		<div>
			<h1>React Exercise 4</h1>
			<h2>Colors</h2>
			<ol>
				{colors.map((color, index) => (
					<li key={index}>{color}</li>
				))}
			</ol>
			<button
				onClick={() => {
					addColor("periwinkle");
				}}
			>
				Periwinkle
			</button>
			<button
				onClick={() => {
					addColor("magenta");
				}}
			>
				Magenta
			</button>
			<button
				onClick={() => {
					addColor("gold");
				}}
			>
				Gold
			</button>
			<h2>Pets</h2>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{pets.map(({ name, type, id }, index) => {
						return (
							<tr key={id}>
								<td>{index + 1}</td>
								<td>{name}</td>
								<td>{type}</td>
								<td>
									<button
										key={id}
										onClick={() => {
											deletePet(id);
										}}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}
