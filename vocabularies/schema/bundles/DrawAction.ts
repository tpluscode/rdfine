import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../CreateAction';
import { DrawActionMixin } from '../DrawAction';

export const DrawActionBundle = [
  CreateActionMixin as Mixin,
  DrawActionMixin as Mixin];
