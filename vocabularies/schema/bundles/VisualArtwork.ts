import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { VisualArtworkMixin } from '../lib/VisualArtwork';
import { PersonMixin } from '../lib/Person';
import { DistanceMixin } from '../lib/Distance';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const VisualArtworkBundle = [
  CreativeWorkMixin as Mixin,
  VisualArtworkMixin as Mixin,
  PersonMixin as Mixin,
  DistanceMixin as Mixin,
  QuantitativeValueMixin as Mixin];
