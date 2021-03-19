import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { JoinMixin } from '../lib/Join';

export const JoinBundle = [
  ActivityMixin as Mixin,
  JoinMixin as Mixin];
