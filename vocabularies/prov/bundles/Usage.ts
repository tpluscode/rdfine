import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntityInfluenceMixin } from '../lib/EntityInfluence';
import { InstantaneousEventMixin } from '../lib/InstantaneousEvent';
import { UsageMixin } from '../lib/Usage';

export const UsageBundle = [
  EntityInfluenceMixin as Mixin,
  InstantaneousEventMixin as Mixin,
  UsageMixin as Mixin];
