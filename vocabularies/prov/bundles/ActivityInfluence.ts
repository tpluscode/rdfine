import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityInfluenceMixin } from '../lib/ActivityInfluence';
import { ActivityMixin } from '../lib/Activity';
import { InfluenceMixin } from '../lib/Influence';

export const ActivityInfluenceBundle = [
  ActivityInfluenceMixin as Mixin,
  ActivityMixin as Mixin,
  InfluenceMixin as Mixin];
