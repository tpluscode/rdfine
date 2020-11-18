import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { MenuMixin } from '../lib/Menu';
import { RatingMixin } from '../lib/Rating';

export const FoodEstablishmentBundle = [
  LocalBusinessMixin as Mixin,
  FoodEstablishmentMixin as Mixin,
  MenuMixin as Mixin,
  RatingMixin as Mixin];
