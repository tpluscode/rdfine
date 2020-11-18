import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { PeopleAudienceMixin } from '../lib/PeopleAudience';
import { MedicalAudienceMixin } from '../lib/MedicalAudience';

export const MedicalAudienceBundle = [
  AudienceMixin as Mixin,
  PeopleAudienceMixin as Mixin,
  MedicalAudienceMixin as Mixin];
