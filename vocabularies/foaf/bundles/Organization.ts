import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../Agent';
import { OrganizationMixin } from '../Organization';

export const OrganizationBundle = [
  AgentMixin as Mixin,
  OrganizationMixin as Mixin];
