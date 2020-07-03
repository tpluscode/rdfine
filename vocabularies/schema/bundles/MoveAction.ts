import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { MoveActionMixin } from '../MoveAction';
import { PlaceMixin } from '../Place';

export const MoveActionBundle = [
  ActionMixin as Mixin,
  MoveActionMixin as Mixin,
  PlaceMixin as Mixin];
