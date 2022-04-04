'use strict';
import Router from 'express';

import calculatorController from './calculatorController.js';

const router = new Router();

router.post('/sumAndCheckPrime', calculatorController.sumAndCheckPrime);
router.get('/checkPrime/:number', calculatorController.checkPrime);

export default router;