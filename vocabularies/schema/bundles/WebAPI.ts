import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ServiceMixin } from '../lib/Service';
import { WebAPIMixin } from '../lib/WebAPI';

export const WebAPIBundle = [
  CreativeWorkMixin as Mixin,
  ServiceMixin as Mixin,
  WebAPIMixin as Mixin];
