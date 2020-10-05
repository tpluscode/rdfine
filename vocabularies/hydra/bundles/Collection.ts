import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { ManagesBlockMixin } from '../ManagesBlock';
import { CollectionMixin } from '../Collection';

export const CollectionBundle = [
  ResourceMixin as Mixin,
  ManagesBlockMixin as Mixin,
  CollectionMixin as Mixin];
