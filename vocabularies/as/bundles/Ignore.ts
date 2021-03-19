import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { IgnoreMixin } from '../lib/Ignore';

export const IgnoreBundle = [
  ActivityMixin as Mixin,
  IgnoreMixin as Mixin];
