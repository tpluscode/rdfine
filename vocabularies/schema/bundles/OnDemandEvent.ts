import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OnDemandEventMixin } from '../lib/OnDemandEvent';
import { PublicationEventMixin } from '../lib/PublicationEvent';

export const OnDemandEventBundle = [
  OnDemandEventMixin as Mixin,
  PublicationEventMixin as Mixin];
