import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OperationMixin } from '../lib/Operation';
import { ClassMixin } from '../lib/Class';

export const ClassBundle = [
  OperationMixin as Mixin,
  ClassMixin as Mixin];
