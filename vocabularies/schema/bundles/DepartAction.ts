import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MoveActionMixin } from '../lib/MoveAction';
import { DepartActionMixin } from '../lib/DepartAction';

export const DepartActionBundle = [
  MoveActionMixin as Mixin,
  DepartActionMixin as Mixin];
