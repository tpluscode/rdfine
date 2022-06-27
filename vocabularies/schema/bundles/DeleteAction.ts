import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DeleteActionMixin } from '../lib/DeleteAction';
import { UpdateActionMixin } from '../lib/UpdateAction';

export const DeleteActionBundle = [
  DeleteActionMixin as Mixin,
  UpdateActionMixin as Mixin];
