import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../Audience';
import { PeopleAudienceMixin } from '../PeopleAudience';
import { MedicalConditionMixin } from '../MedicalCondition';

export const PeopleAudienceBundle = [
  AudienceMixin as Mixin,
  PeopleAudienceMixin as Mixin,
  MedicalConditionMixin as Mixin];
