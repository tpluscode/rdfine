import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InsertActionMixin } from '../lib/InsertAction';
import { PrependActionMixin } from '../lib/PrependAction';

export const PrependActionBundle = [
  InsertActionMixin as Mixin,
  PrependActionMixin as Mixin];
