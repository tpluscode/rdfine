import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { LeaveMixin } from '../lib/Leave';

export const LeaveBundle = [
  ActivityMixin as Mixin,
  LeaveMixin as Mixin];
