import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../lib/WebPageElement';
import { WPHeaderMixin } from '../lib/WPHeader';

export const WPHeaderBundle = [
  WebPageElementMixin as Mixin,
  WPHeaderMixin as Mixin];
