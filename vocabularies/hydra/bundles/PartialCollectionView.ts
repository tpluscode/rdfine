import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../lib/Resource';
import { PartialCollectionViewMixin } from '../lib/PartialCollectionView';

export const PartialCollectionViewBundle = [
  ResourceMixin as Mixin,
  PartialCollectionViewMixin as Mixin];
