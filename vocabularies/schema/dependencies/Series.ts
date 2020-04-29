import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { SeriesMixin } from '../Series';

export const SeriesDependencies = [
  IntangibleMixin as Mixin,
  SeriesMixin as Mixin];
