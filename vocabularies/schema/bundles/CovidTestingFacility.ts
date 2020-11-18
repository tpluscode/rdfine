import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalClinicMixin } from '../lib/MedicalClinic';
import { CovidTestingFacilityMixin } from '../lib/CovidTestingFacility';

export const CovidTestingFacilityBundle = [
  MedicalClinicMixin as Mixin,
  CovidTestingFacilityMixin as Mixin];
