import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreateActionMixin } from '../CreateAction';
import { PaintActionMixin } from '../PaintAction';

export const PaintActionDependencies = [
  CreateActionMixin as Mixin,
  PaintActionMixin as Mixin];
