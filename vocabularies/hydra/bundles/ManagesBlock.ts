import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { ManagesBlockMixin } from '../lib/ManagesBlock';
import { ClassMixin } from '../lib/Class';

export const ManagesBlockBundle = [
  ResourceMixin as Mixin,
  ManagesBlockMixin as Mixin,
  ClassMixin as Mixin];
