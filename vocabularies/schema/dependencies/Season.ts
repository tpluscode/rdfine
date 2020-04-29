import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { SeasonMixin } from '../Season';

export const SeasonDependencies = [
  CreativeWorkMixin as Mixin,
  SeasonMixin as Mixin];
