import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntityMixin } from '../lib/Entity';
import { CollectionMixin } from '../lib/Collection';

export const CollectionBundle = [
  EntityMixin as Mixin,
  CollectionMixin as Mixin];
