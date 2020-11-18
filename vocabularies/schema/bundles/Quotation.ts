import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { QuotationMixin } from '../lib/Quotation';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const QuotationBundle = [
  CreativeWorkMixin as Mixin,
  QuotationMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
