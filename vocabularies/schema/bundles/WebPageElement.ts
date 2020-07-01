import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { WebPageElementMixin } from '../WebPageElement';

export const WebPageElementBundle = [
  CreativeWorkMixin as Mixin,
  WebPageElementMixin as Mixin];
