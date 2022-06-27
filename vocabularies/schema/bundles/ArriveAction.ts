import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArriveActionMixin } from '../lib/ArriveAction';
import { MoveActionMixin } from '../lib/MoveAction';

export const ArriveActionBundle = [
  ArriveActionMixin as Mixin,
  MoveActionMixin as Mixin];
