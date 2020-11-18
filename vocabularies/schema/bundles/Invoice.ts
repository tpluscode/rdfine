import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { InvoiceMixin } from '../lib/Invoice';
import { DurationMixin } from '../lib/Duration';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { ThingMixin } from '../lib/Thing';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { OrderMixin } from '../lib/Order';

export const InvoiceBundle = [
  IntangibleMixin as Mixin,
  InvoiceMixin as Mixin,
  DurationMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ThingMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  OrderMixin as Mixin];
