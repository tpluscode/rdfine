import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SoftwareAgentMixin } from '../lib/SoftwareAgent';
import { ServiceDescriptionMixin } from '../lib/ServiceDescription';

export const ServiceDescriptionBundle = [
  SoftwareAgentMixin as Mixin,
  ServiceDescriptionMixin as Mixin];
