import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../WebPageElement';
import { WPHeaderMixin } from '../WPHeader';

export const WPHeaderBundle = [
  WebPageElementMixin as Mixin,
  WPHeaderMixin as Mixin];
