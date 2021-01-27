import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { RightsAssignmentMixin } from '../lib/RightsAssignment';

export const RightsAssignmentBundle = [
  ActivityMixin as Mixin,
  RightsAssignmentMixin as Mixin];
