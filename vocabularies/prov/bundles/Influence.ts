import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { InfluenceMixin } from '../lib/Influence';
import { RoleMixin } from '../lib/Role';

export const InfluenceBundle = [
  ActivityMixin as Mixin,
  InfluenceMixin as Mixin,
  RoleMixin as Mixin];
