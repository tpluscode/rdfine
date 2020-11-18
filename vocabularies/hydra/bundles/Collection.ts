import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { ManagesBlockMixin } from '../lib/ManagesBlock';
import { CollectionMixin } from '../lib/Collection';

export const CollectionBundle = [
  ResourceMixin as Mixin,
  ManagesBlockMixin as Mixin,
  CollectionMixin as Mixin];
