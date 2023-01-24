import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DemographicGroupMixin } from '../lib/DemographicGroup';
import { GroupMixin } from '../lib/Group';
import { PersonMixin } from '../lib/Person';
import { TypeMixin } from '../lib/Type';

export const DemographicGroupBundle = [
  DemographicGroupMixin as Mixin,
  GroupMixin as Mixin,
  PersonMixin as Mixin,
  TypeMixin as Mixin];
