import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../Service';
import { BroadcastServiceMixin } from '../BroadcastService';
import { PlaceMixin } from '../Place';
import { OrganizationMixin } from '../Organization';
import { BroadcastFrequencySpecificationMixin } from '../BroadcastFrequencySpecification';
import { BroadcastChannelMixin } from '../BroadcastChannel';
import { LanguageMixin } from '../Language';

export const BroadcastServiceBundle = [
  ServiceMixin as Mixin,
  BroadcastServiceMixin as Mixin,
  PlaceMixin as Mixin,
  OrganizationMixin as Mixin,
  BroadcastFrequencySpecificationMixin as Mixin,
  BroadcastChannelMixin as Mixin,
  LanguageMixin as Mixin];
