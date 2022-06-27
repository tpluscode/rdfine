import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DurationMixin } from '../lib/Duration';
import { IntangibleMixin } from '../lib/Intangible';
import { InvoiceMixin } from '../lib/Invoice';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { OrderMixin } from '../lib/Order';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { ThingMixin } from '../lib/Thing';

export const InvoiceBundle = [
  DurationMixin as Mixin,
  IntangibleMixin as Mixin,
  InvoiceMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  OrderMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  ThingMixin as Mixin];
