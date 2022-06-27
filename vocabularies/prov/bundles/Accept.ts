import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AcceptMixin } from '../lib/Accept';
import { ActivityMixin } from '../lib/Activity';

export const AcceptBundle = [
  AcceptMixin as Mixin,
  ActivityMixin as Mixin];
