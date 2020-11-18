import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { WineryMixin } from '../lib/Winery';

export const WineryBundle = [
  FoodEstablishmentMixin as Mixin,
  WineryMixin as Mixin];
