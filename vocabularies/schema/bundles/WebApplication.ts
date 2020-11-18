import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';
import { WebApplicationMixin } from '../lib/WebApplication';

export const WebApplicationBundle = [
  SoftwareApplicationMixin as Mixin,
  WebApplicationMixin as Mixin];
