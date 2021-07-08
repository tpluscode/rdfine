import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { EnergyConsumptionDetailsMixin } from '../lib/EnergyConsumptionDetails';

export const EnergyConsumptionDetailsBundle = [
  IntangibleMixin as Mixin,
  EnergyConsumptionDetailsMixin as Mixin];
