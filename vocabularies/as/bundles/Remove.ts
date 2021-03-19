import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { RemoveMixin } from '../lib/Remove';

export const RemoveBundle = [
  ActivityMixin as Mixin,
  RemoveMixin as Mixin];
