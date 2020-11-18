import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MoveActionMixin } from '../lib/MoveAction';
import { ArriveActionMixin } from '../lib/ArriveAction';

export const ArriveActionBundle = [
  MoveActionMixin as Mixin,
  ArriveActionMixin as Mixin];
