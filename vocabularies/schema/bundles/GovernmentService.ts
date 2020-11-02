import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../Service';
import { GovernmentServiceMixin } from '../GovernmentService';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { OrganizationMixin } from '../Organization';

export const GovernmentServiceBundle = [
  ServiceMixin as Mixin,
  GovernmentServiceMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  OrganizationMixin as Mixin];
