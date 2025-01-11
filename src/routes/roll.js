const rollRouter = require('express').Router();
const { getRolesMenores, createRoll } = require('../controllers/roll');

rollRouter.get('/', async (req, res) => {
  res.json(await getRolesMenores());
});

rollRouter.post('/', async (req, res) => {
  const { role } = req.body;
  const rol = await createRoll(role);
  res.json(rol);
});

module.exports = rollRouter;
