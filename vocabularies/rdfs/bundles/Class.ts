import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { ClassMixin } from '../lib/Class';

export const ClassBundle = [
  ResourceMixin as Mixin,
  ClassMixin as Mixin];
