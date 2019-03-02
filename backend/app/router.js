// Import dependency //
import router from 'koa-route';

// Import module //
import { getCartoonList } from './action';

router.get('/', getCartoonList);

export default router;
