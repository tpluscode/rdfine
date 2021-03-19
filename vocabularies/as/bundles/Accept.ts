import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { AcceptMixin } from '../lib/Accept';

export const AcceptBundle = [
  ActivityMixin as Mixin,
  AcceptMixin as Mixin];
