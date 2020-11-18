import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../lib/Service';
import { BroadcastServiceMixin } from '../lib/BroadcastService';
import { PlaceMixin } from '../lib/Place';
import { OrganizationMixin } from '../lib/Organization';
import { BroadcastFrequencySpecificationMixin } from '../lib/BroadcastFrequencySpecification';
import { BroadcastChannelMixin } from '../lib/BroadcastChannel';
import { LanguageMixin } from '../lib/Language';

export const BroadcastServiceBundle = [
  ServiceMixin as Mixin,
  BroadcastServiceMixin as Mixin,
  PlaceMixin as Mixin,
  OrganizationMixin as Mixin,
  BroadcastFrequencySpecificationMixin as Mixin,
  BroadcastChannelMixin as Mixin,
  LanguageMixin as Mixin];
