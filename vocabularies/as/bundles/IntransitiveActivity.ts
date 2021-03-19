import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { IntransitiveActivityMixin } from '../lib/IntransitiveActivity';

export const IntransitiveActivityBundle = [
  ActivityMixin as Mixin,
  IntransitiveActivityMixin as Mixin];
