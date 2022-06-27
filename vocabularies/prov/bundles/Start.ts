import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { EntityInfluenceMixin } from '../lib/EntityInfluence';
import { InstantaneousEventMixin } from '../lib/InstantaneousEvent';
import { StartMixin } from '../lib/Start';

export const StartBundle = [
  ActivityMixin as Mixin,
  EntityInfluenceMixin as Mixin,
  InstantaneousEventMixin as Mixin,
  StartMixin as Mixin];
