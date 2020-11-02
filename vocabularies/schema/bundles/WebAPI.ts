import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../Service';
import { WebAPIMixin } from '../WebAPI';
import { CreativeWorkMixin } from '../CreativeWork';

export const WebAPIBundle = [
  ServiceMixin as Mixin,
  WebAPIMixin as Mixin,
  CreativeWorkMixin as Mixin];
