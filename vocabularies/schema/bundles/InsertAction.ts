import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AddActionMixin } from '../lib/AddAction';
import { InsertActionMixin } from '../lib/InsertAction';
import { PlaceMixin } from '../lib/Place';

export const InsertActionBundle = [
  AddActionMixin as Mixin,
  InsertActionMixin as Mixin,
  PlaceMixin as Mixin];
