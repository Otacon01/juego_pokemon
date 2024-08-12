
const { Capturado } = require('../baseDatos');

const capturarPokemon = async (req, res) => {
  try {
    const compra = await Capturado.create(req.body);
    res.status(201).json({ message: 'Pokemon capturado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    capturarPokemon
};