import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { PartialCollectionViewMixin } from '../PartialCollectionView';

export const PartialCollectionViewBundle = [
  ResourceMixin as Mixin,
  PartialCollectionViewMixin as Mixin];
