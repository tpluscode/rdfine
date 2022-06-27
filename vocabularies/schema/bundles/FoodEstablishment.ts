import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { MenuMixin } from '../lib/Menu';
import { RatingMixin } from '../lib/Rating';

export const FoodEstablishmentBundle = [
  FoodEstablishmentMixin as Mixin,
  LocalBusinessMixin as Mixin,
  MenuMixin as Mixin,
  RatingMixin as Mixin];
