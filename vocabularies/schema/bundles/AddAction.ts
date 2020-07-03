import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UpdateActionMixin } from '../UpdateAction';
import { AddActionMixin } from '../AddAction';

export const AddActionBundle = [
  UpdateActionMixin as Mixin,
  AddActionMixin as Mixin];
