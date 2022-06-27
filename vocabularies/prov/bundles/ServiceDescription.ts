import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceDescriptionMixin } from '../lib/ServiceDescription';
import { SoftwareAgentMixin } from '../lib/SoftwareAgent';

export const ServiceDescriptionBundle = [
  ServiceDescriptionMixin as Mixin,
  SoftwareAgentMixin as Mixin];
