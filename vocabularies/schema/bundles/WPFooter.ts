import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageElementMixin } from '../lib/WebPageElement';
import { WPFooterMixin } from '../lib/WPFooter';

export const WPFooterBundle = [
  WebPageElementMixin as Mixin,
  WPFooterMixin as Mixin];
