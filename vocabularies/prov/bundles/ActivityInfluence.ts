import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InfluenceMixin } from '../lib/Influence';
import { ActivityMixin } from '../lib/Activity';
import { ActivityInfluenceMixin } from '../lib/ActivityInfluence';

export const ActivityInfluenceBundle = [
  InfluenceMixin as Mixin,
  ActivityMixin as Mixin,
  ActivityInfluenceMixin as Mixin];
