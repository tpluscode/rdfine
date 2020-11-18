import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { MoveActionMixin } from '../lib/MoveAction';
import { PlaceMixin } from '../lib/Place';

export const MoveActionBundle = [
  ActionMixin as Mixin,
  MoveActionMixin as Mixin,
  PlaceMixin as Mixin];
