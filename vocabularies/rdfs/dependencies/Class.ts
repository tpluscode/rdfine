import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { ClassMixin } from '../Class';

export const ClassDependencies = [
  ResourceMixin as Mixin,
  ClassMixin as Mixin];
