import express,{ Router} from 'express';

import LocationController from './LocationController';

const router:Router = express.Router()

router.get('/',LocationController.getCurrentLocation)

export default router;