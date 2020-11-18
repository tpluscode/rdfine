import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClassMixin } from '../lib/Class';
import { DatatypeMixin } from '../lib/Datatype';

export const DatatypeBundle = [
  ClassMixin as Mixin,
  DatatypeMixin as Mixin];
