import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityInfluenceMixin } from '../lib/ActivityInfluence';
import { InstantaneousEventMixin } from '../lib/InstantaneousEvent';
import { InvalidationMixin } from '../lib/Invalidation';

export const InvalidationBundle = [
  ActivityInfluenceMixin as Mixin,
  InstantaneousEventMixin as Mixin,
  InvalidationMixin as Mixin];
