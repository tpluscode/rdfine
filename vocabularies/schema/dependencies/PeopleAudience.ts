import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../Audience';
import { PeopleAudienceMixin } from '../PeopleAudience';

export const PeopleAudienceDependencies = [
  AudienceMixin as Mixin,
  PeopleAudienceMixin as Mixin];
