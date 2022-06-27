import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClassMixin } from '../lib/Class';
import { ResourceMixin } from '../lib/Resource';

export const ClassBundle = [
  ClassMixin as Mixin,
  ResourceMixin as Mixin];
