import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { EndMixin } from '../lib/End';
import { EntityInfluenceMixin } from '../lib/EntityInfluence';
import { InstantaneousEventMixin } from '../lib/InstantaneousEvent';

export const EndBundle = [
  ActivityMixin as Mixin,
  EndMixin as Mixin,
  EntityInfluenceMixin as Mixin,
  InstantaneousEventMixin as Mixin];
