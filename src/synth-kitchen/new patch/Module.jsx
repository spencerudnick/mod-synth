import React from 'react';

export default function Module({ id }) {
	return (
		<>
			<h1>{id}</h1>
			<button className="delete">Delete</button>
		</>
	);
}
