import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CollectionMixin } from '../lib/Collection';
import { EntityMixin } from '../lib/Entity';

export const CollectionBundle = [
  CollectionMixin as Mixin,
  EntityMixin as Mixin];
