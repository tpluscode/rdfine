import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PeopleAudienceMixin } from '../PeopleAudience';
import { ParentAudienceMixin } from '../ParentAudience';

export const ParentAudienceBundle = [
  PeopleAudienceMixin as Mixin,
  ParentAudienceMixin as Mixin];
