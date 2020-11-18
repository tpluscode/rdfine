import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentBuildingMixin } from '../lib/GovernmentBuilding';
import { DefenceEstablishmentMixin } from '../lib/DefenceEstablishment';

export const DefenceEstablishmentBundle = [
  GovernmentBuildingMixin as Mixin,
  DefenceEstablishmentMixin as Mixin];
