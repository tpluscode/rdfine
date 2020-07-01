import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { WineryMixin } from '../Winery';

export const WineryBundle = [
  FoodEstablishmentMixin as Mixin,
  WineryMixin as Mixin];
