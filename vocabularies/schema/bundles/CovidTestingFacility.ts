import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CovidTestingFacilityMixin } from '../lib/CovidTestingFacility';
import { MedicalClinicMixin } from '../lib/MedicalClinic';

export const CovidTestingFacilityBundle = [
  CovidTestingFacilityMixin as Mixin,
  MedicalClinicMixin as Mixin];
