import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SoftwareApplicationMixin } from '../SoftwareApplication';
import { WebApplicationMixin } from '../WebApplication';

export const WebApplicationBundle = [
  SoftwareApplicationMixin as Mixin,
  WebApplicationMixin as Mixin];
