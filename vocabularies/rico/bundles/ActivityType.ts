import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { ActivityTypeMixin } from '../lib/ActivityType';
import { TypeMixin } from '../lib/Type';

export const ActivityTypeBundle = [
  ActivityMixin as Mixin,
  ActivityTypeMixin as Mixin,
  TypeMixin as Mixin];
