import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';
import { DrugLegalStatusMixin } from '../lib/DrugLegalStatus';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';

export const DrugLegalStatusBundle = [
  MedicalIntangibleMixin as Mixin,
  DrugLegalStatusMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
