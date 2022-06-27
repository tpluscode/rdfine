import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DistanceMixin } from '../lib/Distance';
import { MoveActionMixin } from '../lib/MoveAction';
import { TravelActionMixin } from '../lib/TravelAction';

export const TravelActionBundle = [
  DistanceMixin as Mixin,
  MoveActionMixin as Mixin,
  TravelActionMixin as Mixin];
