import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../WebPageElement';
import { WPFooterMixin } from '../WPFooter';

export const WPFooterBundle = [
  WebPageElementMixin as Mixin,
  WPFooterMixin as Mixin];
