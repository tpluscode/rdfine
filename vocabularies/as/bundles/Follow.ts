import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { FollowMixin } from '../lib/Follow';

export const FollowBundle = [
  ActivityMixin as Mixin,
  FollowMixin as Mixin];
