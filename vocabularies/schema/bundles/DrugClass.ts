import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DrugClassMixin } from '../lib/DrugClass';
import { DrugMixin } from '../lib/Drug';
import { MedicalEntityMixin } from '../lib/MedicalEntity';

export const DrugClassBundle = [
  DrugClassMixin as Mixin,
  DrugMixin as Mixin,
  MedicalEntityMixin as Mixin];
