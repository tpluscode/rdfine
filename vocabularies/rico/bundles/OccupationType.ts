import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityTypeMixin } from '../lib/ActivityType';
import { DemographicGroupMixin } from '../lib/DemographicGroup';
import { OccupationTypeMixin } from '../lib/OccupationType';
import { PersonMixin } from '../lib/Person';

export const OccupationTypeBundle = [
  ActivityTypeMixin as Mixin,
  DemographicGroupMixin as Mixin,
  OccupationTypeMixin as Mixin,
  PersonMixin as Mixin];
