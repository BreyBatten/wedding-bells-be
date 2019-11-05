const db = require("../database/config");

const find = async weddingId => {
	try {
		return await db("guests").where({ wedding_id: weddingId });
	} catch (err) {
		console.error(err);
		throw err;
	}
};

const findById = async id => {
	try {
		return (await db("guests").where({ id }))[0];
	} catch (err) {
		console.error(err);
		throw err;
	}
};

const findByFilter = async filter => {};

const add = async (guest, weddingId) => {
	try {
		const [id] = await db("guests")
			.insert({ ...guest, wedding_id: weddingId })
			.returning("id");
		return await findById(id);
	} catch (err) {
		console.error(err);
		throw err;
	}
};

const update = async (id, guest) => {};
const remove = async id => {};

module.exports = {
	find,
	findById,
	findByFilter,
	add,
	update,
	remove,
};
