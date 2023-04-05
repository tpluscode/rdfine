import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DepartActionMixin } from '../lib/DepartAction';
import { MoveActionMixin } from '../lib/MoveAction';

export const DepartActionBundle = [
  DepartActionMixin as Mixin,
  MoveActionMixin as Mixin];
