import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { MechanismMixin } from '../lib/Mechanism';

export const MechanismBundle = [
  AgentMixin as Mixin,
  MechanismMixin as Mixin];
