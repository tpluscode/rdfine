import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MoveActionMixin } from '../lib/MoveAction';
import { TravelActionMixin } from '../lib/TravelAction';
import { DistanceMixin } from '../lib/Distance';

export const TravelActionBundle = [
  MoveActionMixin as Mixin,
  TravelActionMixin as Mixin,
  DistanceMixin as Mixin];
