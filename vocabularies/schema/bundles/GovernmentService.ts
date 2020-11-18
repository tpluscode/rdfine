import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../lib/Service';
import { GovernmentServiceMixin } from '../lib/GovernmentService';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { OrganizationMixin } from '../lib/Organization';

export const GovernmentServiceBundle = [
  ServiceMixin as Mixin,
  GovernmentServiceMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  OrganizationMixin as Mixin];
