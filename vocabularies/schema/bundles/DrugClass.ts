import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { DrugClassMixin } from '../lib/DrugClass';
import { DrugMixin } from '../lib/Drug';

export const DrugClassBundle = [
  MedicalEntityMixin as Mixin,
  DrugClassMixin as Mixin,
  DrugMixin as Mixin];
