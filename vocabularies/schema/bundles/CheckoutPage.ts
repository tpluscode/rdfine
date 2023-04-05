import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CheckoutPageMixin } from '../lib/CheckoutPage';
import { WebPageMixin } from '../lib/WebPage';

export const CheckoutPageBundle = [
  CheckoutPageMixin as Mixin,
  WebPageMixin as Mixin];
