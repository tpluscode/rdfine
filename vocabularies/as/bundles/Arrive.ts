import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArriveMixin } from '../lib/Arrive';
import { IntransitiveActivityMixin } from '../lib/IntransitiveActivity';

export const ArriveBundle = [
  ArriveMixin as Mixin,
  IntransitiveActivityMixin as Mixin];
