import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DefenceEstablishmentMixin } from '../lib/DefenceEstablishment';
import { GovernmentBuildingMixin } from '../lib/GovernmentBuilding';

export const DefenceEstablishmentBundle = [
  DefenceEstablishmentMixin as Mixin,
  GovernmentBuildingMixin as Mixin];
