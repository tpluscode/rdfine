import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { MenuMixin } from '../Menu';
import { RatingMixin } from '../Rating';

export const FoodEstablishmentBundle = [
  LocalBusinessMixin as Mixin,
  FoodEstablishmentMixin as Mixin,
  MenuMixin as Mixin,
  RatingMixin as Mixin];
