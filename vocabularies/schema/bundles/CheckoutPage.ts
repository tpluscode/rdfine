import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../lib/WebPage';
import { CheckoutPageMixin } from '../lib/CheckoutPage';

export const CheckoutPageBundle = [
  WebPageMixin as Mixin,
  CheckoutPageMixin as Mixin];
