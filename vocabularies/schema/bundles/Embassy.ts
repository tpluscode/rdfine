import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GovernmentBuildingMixin } from '../GovernmentBuilding';
import { EmbassyMixin } from '../Embassy';

export const EmbassyBundle = [
  GovernmentBuildingMixin as Mixin,
  EmbassyMixin as Mixin];
