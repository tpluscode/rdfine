import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { OwnershipInfoMixin } from '../OwnershipInfo';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { ProductMixin } from '../Product';
import { ServiceMixin } from '../Service';

export const OwnershipInfoBundle = [
  StructuredValueMixin as Mixin,
  OwnershipInfoMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ProductMixin as Mixin,
  ServiceMixin as Mixin];
