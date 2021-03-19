import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { DeleteMixin } from '../lib/Delete';

export const DeleteBundle = [
  ActivityMixin as Mixin,
  DeleteMixin as Mixin];
