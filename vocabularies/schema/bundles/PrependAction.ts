import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InsertActionMixin } from '../InsertAction';
import { PrependActionMixin } from '../PrependAction';

export const PrependActionBundle = [
  InsertActionMixin as Mixin,
  PrependActionMixin as Mixin];
