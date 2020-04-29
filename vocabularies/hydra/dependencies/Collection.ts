import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { CollectionMixin } from '../Collection';

export const CollectionDependencies = [
  ResourceMixin as Mixin,
  CollectionMixin as Mixin];
