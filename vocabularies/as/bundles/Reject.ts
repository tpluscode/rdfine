import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { RejectMixin } from '../lib/Reject';

export const RejectBundle = [
  ActivityMixin as Mixin,
  RejectMixin as Mixin];
