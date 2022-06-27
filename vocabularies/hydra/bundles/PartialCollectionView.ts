import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PartialCollectionViewMixin } from '../lib/PartialCollectionView';
import { ResourceMixin } from '../lib/Resource';

export const PartialCollectionViewBundle = [
  PartialCollectionViewMixin as Mixin,
  ResourceMixin as Mixin];
