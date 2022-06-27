import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BarOrPubMixin } from '../lib/BarOrPub';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';

export const BarOrPubBundle = [
  BarOrPubMixin as Mixin,
  FoodEstablishmentMixin as Mixin];
