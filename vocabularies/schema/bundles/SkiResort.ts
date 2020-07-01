import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { SkiResortMixin } from '../SkiResort';

export const SkiResortBundle = [
  SportsActivityLocationMixin as Mixin,
  SkiResortMixin as Mixin];
