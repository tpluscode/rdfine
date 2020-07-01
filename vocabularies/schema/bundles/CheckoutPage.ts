import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { CheckoutPageMixin } from '../CheckoutPage';

export const CheckoutPageBundle = [
  WebPageMixin as Mixin,
  CheckoutPageMixin as Mixin];
