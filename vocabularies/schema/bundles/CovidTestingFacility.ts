import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalClinicMixin } from '../MedicalClinic';
import { CovidTestingFacilityMixin } from '../CovidTestingFacility';

export const CovidTestingFacilityBundle = [
  MedicalClinicMixin as Mixin,
  CovidTestingFacilityMixin as Mixin];
