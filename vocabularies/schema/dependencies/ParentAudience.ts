import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PeopleAudienceMixin } from '../PeopleAudience';
import { ParentAudienceMixin } from '../ParentAudience';

export const ParentAudienceDependencies = [
  PeopleAudienceMixin as Mixin,
  ParentAudienceMixin as Mixin];
