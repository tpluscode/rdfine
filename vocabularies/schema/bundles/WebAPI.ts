import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../lib/Service';
import { WebAPIMixin } from '../lib/WebAPI';
import { CreativeWorkMixin } from '../lib/CreativeWork';

export const WebAPIBundle = [
  ServiceMixin as Mixin,
  WebAPIMixin as Mixin,
  CreativeWorkMixin as Mixin];
