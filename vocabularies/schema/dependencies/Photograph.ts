import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { PhotographMixin } from '../Photograph';

export const PhotographDependencies = [
  CreativeWorkMixin as Mixin,
  PhotographMixin as Mixin];
