import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { MedicalAudienceMixin } from '../lib/MedicalAudience';
import { PeopleAudienceMixin } from '../lib/PeopleAudience';

export const MedicalAudienceBundle = [
  AudienceMixin as Mixin,
  MedicalAudienceMixin as Mixin,
  PeopleAudienceMixin as Mixin];
