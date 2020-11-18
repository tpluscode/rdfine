import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../lib/CreateAction';
import { PhotographActionMixin } from '../lib/PhotographAction';

export const PhotographActionBundle = [
  CreateActionMixin as Mixin,
  PhotographActionMixin as Mixin];
