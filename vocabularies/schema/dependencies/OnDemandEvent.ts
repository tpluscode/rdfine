import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PublicationEventMixin } from '../PublicationEvent';
import { OnDemandEventMixin } from '../OnDemandEvent';

export const OnDemandEventDependencies = [
  PublicationEventMixin as Mixin,
  OnDemandEventMixin as Mixin];
