import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { GameMixin } from '../lib/Game';
import { ThingMixin } from '../lib/Thing';
import { PlaceMixin } from '../lib/Place';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const GameBundle = [
  CreativeWorkMixin as Mixin,
  GameMixin as Mixin,
  ThingMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin,
  QuantitativeValueMixin as Mixin];
