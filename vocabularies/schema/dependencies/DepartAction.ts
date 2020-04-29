import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MoveActionMixin } from '../MoveAction';
import { DepartActionMixin } from '../DepartAction';

export const DepartActionDependencies = [
  MoveActionMixin as Mixin,
  DepartActionMixin as Mixin];
