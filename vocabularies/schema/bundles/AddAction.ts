import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UpdateActionMixin } from '../lib/UpdateAction';
import { AddActionMixin } from '../lib/AddAction';

export const AddActionBundle = [
  UpdateActionMixin as Mixin,
  AddActionMixin as Mixin];
