import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MoveActionMixin } from '../MoveAction';
import { TravelActionMixin } from '../TravelAction';
import { DistanceMixin } from '../Distance';

export const TravelActionBundle = [
  MoveActionMixin as Mixin,
  TravelActionMixin as Mixin,
  DistanceMixin as Mixin];
