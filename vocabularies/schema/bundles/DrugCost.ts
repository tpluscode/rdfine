import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { DrugCostMixin } from '../DrugCost';
import { AdministrativeAreaMixin } from '../AdministrativeArea';

export const DrugCostBundle = [
  MedicalEntityMixin as Mixin,
  DrugCostMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
