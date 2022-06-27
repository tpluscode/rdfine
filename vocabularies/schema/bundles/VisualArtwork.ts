import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DistanceMixin } from '../lib/Distance';
import { PersonMixin } from '../lib/Person';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { VisualArtworkMixin } from '../lib/VisualArtwork';

export const VisualArtworkBundle = [
  CreativeWorkMixin as Mixin,
  DistanceMixin as Mixin,
  PersonMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  VisualArtworkMixin as Mixin];
