import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { GroupMixin } from '../lib/Group';

export const GroupBundle = [
  AgentMixin as Mixin,
  GroupMixin as Mixin];
