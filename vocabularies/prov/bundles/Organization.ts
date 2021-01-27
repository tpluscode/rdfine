import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { OrganizationMixin } from '../lib/Organization';

export const OrganizationBundle = [
  AgentMixin as Mixin,
  OrganizationMixin as Mixin];
