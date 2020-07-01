import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../Audience';
import { EducationalAudienceMixin } from '../EducationalAudience';

export const EducationalAudienceBundle = [
  AudienceMixin as Mixin,
  EducationalAudienceMixin as Mixin];
