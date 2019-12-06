import { Router } from 'express';

const router = Router();

router.route('/users')
  .get(async (req, res) => res.status(200).json('user found'));

export default router;
