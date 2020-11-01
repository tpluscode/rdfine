import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OnlineAccountMixin } from '../OnlineAccount';
import { DocumentMixin } from '../Document';
import { AgentMixin } from '../Agent';

export const AgentBundle = [
  OnlineAccountMixin as Mixin,
  DocumentMixin as Mixin,
  AgentMixin as Mixin];
