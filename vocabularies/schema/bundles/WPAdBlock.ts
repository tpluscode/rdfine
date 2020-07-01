import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../WebPageElement';
import { WPAdBlockMixin } from '../WPAdBlock';

export const WPAdBlockBundle = [
  WebPageElementMixin as Mixin,
  WPAdBlockMixin as Mixin];
