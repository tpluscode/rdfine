import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { BarOrPubMixin } from '../lib/BarOrPub';

export const BarOrPubBundle = [
  FoodEstablishmentMixin as Mixin,
  BarOrPubMixin as Mixin];
