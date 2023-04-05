import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastChannelMixin } from '../lib/BroadcastChannel';
import { BroadcastFrequencySpecificationMixin } from '../lib/BroadcastFrequencySpecification';
import { BroadcastServiceMixin } from '../lib/BroadcastService';
import { CableOrSatelliteServiceMixin } from '../lib/CableOrSatelliteService';
import { IntangibleMixin } from '../lib/Intangible';

export const BroadcastChannelBundle = [
  BroadcastChannelMixin as Mixin,
  BroadcastFrequencySpecificationMixin as Mixin,
  BroadcastServiceMixin as Mixin,
  CableOrSatelliteServiceMixin as Mixin,
  IntangibleMixin as Mixin];
