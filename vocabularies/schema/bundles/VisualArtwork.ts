import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { VisualArtworkMixin } from '../VisualArtwork';
import { DistanceMixin } from '../Distance';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const VisualArtworkBundle = [
  CreativeWorkMixin as Mixin,
  VisualArtworkMixin as Mixin,
  DistanceMixin as Mixin,
  QuantitativeValueMixin as Mixin];
