import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIntangibleMixin } from '../MedicalIntangible';
import { DrugLegalStatusMixin } from '../DrugLegalStatus';
import { AdministrativeAreaMixin } from '../AdministrativeArea';

export const DrugLegalStatusBundle = [
  MedicalIntangibleMixin as Mixin,
  DrugLegalStatusMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
