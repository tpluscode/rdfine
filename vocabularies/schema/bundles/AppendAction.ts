import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InsertActionMixin } from '../lib/InsertAction';
import { AppendActionMixin } from '../lib/AppendAction';

export const AppendActionBundle = [
  InsertActionMixin as Mixin,
  AppendActionMixin as Mixin];
