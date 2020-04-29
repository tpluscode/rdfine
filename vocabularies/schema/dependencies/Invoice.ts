import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { InvoiceMixin } from '../Invoice';
import { DurationMixin } from '../Duration';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { ThingMixin } from '../Thing';
import { MonetaryAmountMixin } from '../MonetaryAmount';
import { PriceSpecificationMixin } from '../PriceSpecification';
import { OrderMixin } from '../Order';

export const InvoiceDependencies = [
  IntangibleMixin as Mixin,
  InvoiceMixin as Mixin,
  DurationMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ThingMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  OrderMixin as Mixin];
