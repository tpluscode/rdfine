import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { GameMixin } from '../Game';
import { ThingMixin } from '../Thing';
import { PlaceMixin } from '../Place';
import { PostalAddressMixin } from '../PostalAddress';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const GameBundle = [
  CreativeWorkMixin as Mixin,
  GameMixin as Mixin,
  ThingMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin,
  QuantitativeValueMixin as Mixin];
