import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EmbassyMixin } from '../lib/Embassy';
import { GovernmentBuildingMixin } from '../lib/GovernmentBuilding';

export const EmbassyBundle = [
  EmbassyMixin as Mixin,
  GovernmentBuildingMixin as Mixin];
