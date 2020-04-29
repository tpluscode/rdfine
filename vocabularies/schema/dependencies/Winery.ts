import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { WineryMixin } from '../Winery';

export const WineryDependencies = [
  FoodEstablishmentMixin as Mixin,
  WineryMixin as Mixin];
