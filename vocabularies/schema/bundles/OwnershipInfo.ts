import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { OwnershipInfoMixin } from '../lib/OwnershipInfo';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { ServiceMixin } from '../lib/Service';
import { ProductMixin } from '../lib/Product';

export const OwnershipInfoBundle = [
  StructuredValueMixin as Mixin,
  OwnershipInfoMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ServiceMixin as Mixin,
  ProductMixin as Mixin];
