import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { EducationalAudienceMixin } from '../lib/EducationalAudience';

export const EducationalAudienceBundle = [
  AudienceMixin as Mixin,
  EducationalAudienceMixin as Mixin];
