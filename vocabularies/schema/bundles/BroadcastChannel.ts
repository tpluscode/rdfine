import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { BroadcastChannelMixin } from '../lib/BroadcastChannel';
import { BroadcastFrequencySpecificationMixin } from '../lib/BroadcastFrequencySpecification';
import { CableOrSatelliteServiceMixin } from '../lib/CableOrSatelliteService';
import { BroadcastServiceMixin } from '../lib/BroadcastService';

export const BroadcastChannelBundle = [
  IntangibleMixin as Mixin,
  BroadcastChannelMixin as Mixin,
  BroadcastFrequencySpecificationMixin as Mixin,
  CableOrSatelliteServiceMixin as Mixin,
  BroadcastServiceMixin as Mixin];
