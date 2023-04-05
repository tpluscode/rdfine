import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ParentAudienceMixin } from '../lib/ParentAudience';
import { PeopleAudienceMixin } from '../lib/PeopleAudience';

export const ParentAudienceBundle = [
  ParentAudienceMixin as Mixin,
  PeopleAudienceMixin as Mixin];
