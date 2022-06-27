import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { GovernmentServiceMixin } from '../lib/GovernmentService';
import { OrganizationMixin } from '../lib/Organization';
import { ServiceMixin } from '../lib/Service';

export const GovernmentServiceBundle = [
  AdministrativeAreaMixin as Mixin,
  GovernmentServiceMixin as Mixin,
  OrganizationMixin as Mixin,
  ServiceMixin as Mixin];
