import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { LinkMixin } from '../lib/Link';
import { ObjectMixin } from '../lib/Object';

export const ActivityBundle = [
  ActivityMixin as Mixin,
  LinkMixin as Mixin,
  ObjectMixin as Mixin];
