import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PeopleAudienceMixin } from '../lib/PeopleAudience';
import { ParentAudienceMixin } from '../lib/ParentAudience';

export const ParentAudienceBundle = [
  PeopleAudienceMixin as Mixin,
  ParentAudienceMixin as Mixin];
