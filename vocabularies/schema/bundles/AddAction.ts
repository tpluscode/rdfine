import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AddActionMixin } from '../lib/AddAction';
import { UpdateActionMixin } from '../lib/UpdateAction';

export const AddActionBundle = [
  AddActionMixin as Mixin,
  UpdateActionMixin as Mixin];
