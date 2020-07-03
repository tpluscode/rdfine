import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentBuildingMixin } from '../GovernmentBuilding';
import { DefenceEstablishmentMixin } from '../DefenceEstablishment';

export const DefenceEstablishmentBundle = [
  GovernmentBuildingMixin as Mixin,
  DefenceEstablishmentMixin as Mixin];
