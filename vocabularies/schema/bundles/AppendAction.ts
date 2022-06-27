import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AppendActionMixin } from '../lib/AppendAction';
import { InsertActionMixin } from '../lib/InsertAction';

export const AppendActionBundle = [
  AppendActionMixin as Mixin,
  InsertActionMixin as Mixin];
