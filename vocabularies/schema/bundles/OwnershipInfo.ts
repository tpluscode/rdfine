import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { OwnershipInfoMixin } from '../lib/OwnershipInfo';
import { PersonMixin } from '../lib/Person';
import { ProductMixin } from '../lib/Product';
import { ServiceMixin } from '../lib/Service';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const OwnershipInfoBundle = [
  OrganizationMixin as Mixin,
  OwnershipInfoMixin as Mixin,
  PersonMixin as Mixin,
  ProductMixin as Mixin,
  ServiceMixin as Mixin,
  StructuredValueMixin as Mixin];
