import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { OwnershipInfoMixin } from '../lib/OwnershipInfo';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { ProductMixin } from '../lib/Product';
import { ServiceMixin } from '../lib/Service';

export const OwnershipInfoBundle = [
  StructuredValueMixin as Mixin,
  OwnershipInfoMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ProductMixin as Mixin,
  ServiceMixin as Mixin];
