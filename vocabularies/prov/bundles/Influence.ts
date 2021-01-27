import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { RoleMixin } from '../lib/Role';
import { InfluenceMixin } from '../lib/Influence';

export const InfluenceBundle = [
  ActivityMixin as Mixin,
  RoleMixin as Mixin,
  InfluenceMixin as Mixin];
