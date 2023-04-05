import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClassMixin } from '../lib/Class';
import { OperationMixin } from '../lib/Operation';

export const ClassBundle = [
  ClassMixin as Mixin,
  OperationMixin as Mixin];
