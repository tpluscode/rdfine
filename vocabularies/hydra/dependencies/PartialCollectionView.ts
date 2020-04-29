import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResourceMixin } from '../Resource';
import { PartialCollectionViewMixin } from '../PartialCollectionView';

export const PartialCollectionViewDependencies = [
  ResourceMixin as Mixin,
  PartialCollectionViewMixin as Mixin];
