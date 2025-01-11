const comboRouter = require('express').Router();
const { Combo } = require('../db');

comboRouter.get('/', async (req, res) => {
  res.json(await Combo.findAll({
    where: {
      status: true,
    },
  }));
});

comboRouter.get('/:id', async (req, res) => {
  res.json(await Combo.findByPk(req.params.id));
});

comboRouter.post('/', async (req, res) => {
  const { name, price } = req.body;
  res.json(await Combo.create({ name, price }));
});

comboRouter.delete('/:id', async (req, res) => {
  const combo = await Combo.findByPk(req.params.id);
  res.json(await combo.update({ status: false }));
});

module.exports = comboRouter;
