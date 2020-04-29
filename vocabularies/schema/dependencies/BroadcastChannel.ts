import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { BroadcastChannelMixin } from '../BroadcastChannel';
import { BroadcastFrequencySpecificationMixin } from '../BroadcastFrequencySpecification';
import { CableOrSatelliteServiceMixin } from '../CableOrSatelliteService';
import { BroadcastServiceMixin } from '../BroadcastService';

export const BroadcastChannelDependencies = [
  IntangibleMixin as Mixin,
  BroadcastChannelMixin as Mixin,
  BroadcastFrequencySpecificationMixin as Mixin,
  CableOrSatelliteServiceMixin as Mixin,
  BroadcastServiceMixin as Mixin];
