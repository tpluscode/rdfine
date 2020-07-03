import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MoveActionMixin } from '../MoveAction';
import { ArriveActionMixin } from '../ArriveAction';

export const ArriveActionBundle = [
  MoveActionMixin as Mixin,
  ArriveActionMixin as Mixin];
