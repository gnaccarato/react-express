const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
	const customers = [
		{id: 1, firstName: 'Gianni', lastName: 'Beast'},
		{id: 2, firstName: 'Frankie', lastName: 'Dank'},
		{id: 3, firstName: 'Luigi', lastName: 'Smansion'}
	];

	res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));