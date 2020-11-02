import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../Audience';
import { PeopleAudienceMixin } from '../PeopleAudience';
import { MedicalAudienceMixin } from '../MedicalAudience';

export const MedicalAudienceBundle = [
  AudienceMixin as Mixin,
  PeopleAudienceMixin as Mixin,
  MedicalAudienceMixin as Mixin];
