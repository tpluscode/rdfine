import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { DrugCostMixin } from '../lib/DrugCost';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';

export const DrugCostBundle = [
  MedicalEntityMixin as Mixin,
  DrugCostMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
