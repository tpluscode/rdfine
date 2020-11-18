import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PublicationEventMixin } from '../lib/PublicationEvent';
import { OnDemandEventMixin } from '../lib/OnDemandEvent';

export const OnDemandEventBundle = [
  PublicationEventMixin as Mixin,
  OnDemandEventMixin as Mixin];
