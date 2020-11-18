import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UpdateActionMixin } from '../lib/UpdateAction';
import { DeleteActionMixin } from '../lib/DeleteAction';

export const DeleteActionBundle = [
  UpdateActionMixin as Mixin,
  DeleteActionMixin as Mixin];
