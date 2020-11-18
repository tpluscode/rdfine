import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../lib/CreateAction';
import { PaintActionMixin } from '../lib/PaintAction';

export const PaintActionBundle = [
  CreateActionMixin as Mixin,
  PaintActionMixin as Mixin];
