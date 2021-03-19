import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntransitiveActivityMixin } from '../lib/IntransitiveActivity';
import { ArriveMixin } from '../lib/Arrive';

export const ArriveBundle = [
  IntransitiveActivityMixin as Mixin,
  ArriveMixin as Mixin];
