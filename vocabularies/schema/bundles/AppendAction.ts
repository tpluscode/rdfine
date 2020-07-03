import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InsertActionMixin } from '../InsertAction';
import { AppendActionMixin } from '../AppendAction';

export const AppendActionBundle = [
  InsertActionMixin as Mixin,
  AppendActionMixin as Mixin];
