import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BroadcastChannelMixin } from '../lib/BroadcastChannel';
import { BroadcastFrequencySpecificationMixin } from '../lib/BroadcastFrequencySpecification';
import { BroadcastServiceMixin } from '../lib/BroadcastService';
import { LanguageMixin } from '../lib/Language';
import { OrganizationMixin } from '../lib/Organization';
import { PlaceMixin } from '../lib/Place';
import { ServiceMixin } from '../lib/Service';

export const BroadcastServiceBundle = [
  BroadcastChannelMixin as Mixin,
  BroadcastFrequencySpecificationMixin as Mixin,
  BroadcastServiceMixin as Mixin,
  LanguageMixin as Mixin,
  OrganizationMixin as Mixin,
  PlaceMixin as Mixin,
  ServiceMixin as Mixin];
