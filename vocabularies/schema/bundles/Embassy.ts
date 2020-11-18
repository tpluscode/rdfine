import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentBuildingMixin } from '../lib/GovernmentBuilding';
import { EmbassyMixin } from '../lib/Embassy';

export const EmbassyBundle = [
  GovernmentBuildingMixin as Mixin,
  EmbassyMixin as Mixin];
