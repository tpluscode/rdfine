import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../lib/CreateAction';
import { DrawActionMixin } from '../lib/DrawAction';

export const DrawActionBundle = [
  CreateActionMixin as Mixin,
  DrawActionMixin as Mixin];
