import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntityInfluenceMixin } from '../lib/EntityInfluence';
import { InstantaneousEventMixin } from '../lib/InstantaneousEvent';
import { ActivityMixin } from '../lib/Activity';
import { EndMixin } from '../lib/End';

export const EndBundle = [
  EntityInfluenceMixin as Mixin,
  InstantaneousEventMixin as Mixin,
  ActivityMixin as Mixin,
  EndMixin as Mixin];
