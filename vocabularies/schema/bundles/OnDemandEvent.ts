import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PublicationEventMixin } from '../PublicationEvent';
import { OnDemandEventMixin } from '../OnDemandEvent';

export const OnDemandEventBundle = [
  PublicationEventMixin as Mixin,
  OnDemandEventMixin as Mixin];
