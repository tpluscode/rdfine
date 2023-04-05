import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EnergyConsumptionDetailsMixin } from '../lib/EnergyConsumptionDetails';
import { IntangibleMixin } from '../lib/Intangible';

export const EnergyConsumptionDetailsBundle = [
  EnergyConsumptionDetailsMixin as Mixin,
  IntangibleMixin as Mixin];
