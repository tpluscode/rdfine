import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntityInfluenceMixin } from '../lib/EntityInfluence';
import { InstantaneousEventMixin } from '../lib/InstantaneousEvent';
import { ActivityMixin } from '../lib/Activity';
import { StartMixin } from '../lib/Start';

export const StartBundle = [
  EntityInfluenceMixin as Mixin,
  InstantaneousEventMixin as Mixin,
  ActivityMixin as Mixin,
  StartMixin as Mixin];
