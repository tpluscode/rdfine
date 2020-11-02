import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../Agent';
import { GroupMixin } from '../Group';

export const GroupBundle = [
  AgentMixin as Mixin,
  GroupMixin as Mixin];
