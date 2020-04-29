import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClassMixin } from '../Class';
import { DatatypeMixin } from '../Datatype';

export const DatatypeDependencies = [
  ClassMixin as Mixin,
  DatatypeMixin as Mixin];
