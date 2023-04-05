import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { ResourceMixin } from '../lib/Resource';

export const CollectionBundle = [
  CollectionMixin as Mixin,
  ResourceMixin as Mixin];
