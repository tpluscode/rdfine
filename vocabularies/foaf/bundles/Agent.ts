import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OnlineAccountMixin } from '../lib/OnlineAccount';
import { DocumentMixin } from '../lib/Document';
import { AgentMixin } from '../lib/Agent';

export const AgentBundle = [
  OnlineAccountMixin as Mixin,
  DocumentMixin as Mixin,
  AgentMixin as Mixin];
