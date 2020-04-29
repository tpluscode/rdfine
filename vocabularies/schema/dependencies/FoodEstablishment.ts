import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { MenuMixin } from '../Menu';
import { RatingMixin } from '../Rating';

export const FoodEstablishmentDependencies = [
  LocalBusinessMixin as Mixin,
  FoodEstablishmentMixin as Mixin,
  MenuMixin as Mixin,
  RatingMixin as Mixin];
