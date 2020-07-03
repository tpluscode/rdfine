import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { CollectionMixin } from '../Collection';

export const CollectionBundle = [
  ResourceMixin as Mixin,
  CollectionMixin as Mixin];
