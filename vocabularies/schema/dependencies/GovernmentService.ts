import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../Service';
import { GovernmentServiceMixin } from '../GovernmentService';
import { OrganizationMixin } from '../Organization';

export const GovernmentServiceDependencies = [
  ServiceMixin as Mixin,
  GovernmentServiceMixin as Mixin,
  OrganizationMixin as Mixin];
