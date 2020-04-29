import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { BarOrPubMixin } from '../BarOrPub';

export const BarOrPubDependencies = [
  FoodEstablishmentMixin as Mixin,
  BarOrPubMixin as Mixin];
