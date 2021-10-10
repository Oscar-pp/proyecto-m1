import HttpError from 'http-errors';
import Router from 'express';

const router = Router();

router.all('/', (req, res, next) => (HttpError(404, { message: "Path does not exist" })));

export default router;