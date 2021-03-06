import memoize from 'lru-memoize';
import { createValidator, required, minLength } from '@recipher/validation';

export default memoize(10)(createValidator({
  name: [ required() ]
, email: [ required() ]
}));
