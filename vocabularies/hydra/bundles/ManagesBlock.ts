import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { ManagesBlockMixin } from '../ManagesBlock';
import { ClassMixin } from '../Class';

export const ManagesBlockBundle = [
  ResourceMixin as Mixin,
  ManagesBlockMixin as Mixin,
  ClassMixin as Mixin];
