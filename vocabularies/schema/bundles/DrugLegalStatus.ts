import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { DrugLegalStatusMixin } from '../lib/DrugLegalStatus';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';

export const DrugLegalStatusBundle = [
  AdministrativeAreaMixin as Mixin,
  DrugLegalStatusMixin as Mixin,
  MedicalIntangibleMixin as Mixin];
