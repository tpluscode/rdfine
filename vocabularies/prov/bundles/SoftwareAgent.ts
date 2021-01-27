import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { SoftwareAgentMixin } from '../lib/SoftwareAgent';

export const SoftwareAgentBundle = [
  AgentMixin as Mixin,
  SoftwareAgentMixin as Mixin];
