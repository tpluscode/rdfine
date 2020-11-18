import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../lib/WebPageElement';
import { WPAdBlockMixin } from '../lib/WPAdBlock';

export const WPAdBlockBundle = [
  WebPageElementMixin as Mixin,
  WPAdBlockMixin as Mixin];
