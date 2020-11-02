import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { QuotationMixin } from '../Quotation';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const QuotationBundle = [
  CreativeWorkMixin as Mixin,
  QuotationMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
