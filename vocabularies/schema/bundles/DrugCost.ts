import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { DrugCostMixin } from '../lib/DrugCost';
import { MedicalEntityMixin } from '../lib/MedicalEntity';

export const DrugCostBundle = [
  AdministrativeAreaMixin as Mixin,
  DrugCostMixin as Mixin,
  MedicalEntityMixin as Mixin];
