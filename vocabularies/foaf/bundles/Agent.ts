import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { DocumentMixin } from '../lib/Document';
import { OnlineAccountMixin } from '../lib/OnlineAccount';

export const AgentBundle = [
  AgentMixin as Mixin,
  DocumentMixin as Mixin,
  OnlineAccountMixin as Mixin];
