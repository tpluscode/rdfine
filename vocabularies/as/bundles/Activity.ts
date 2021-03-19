import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { ActivityMixin } from '../lib/Activity';
import { LinkMixin } from '../lib/Link';

export const ActivityBundle = [
  ObjectMixin as Mixin,
  ActivityMixin as Mixin,
  LinkMixin as Mixin];
