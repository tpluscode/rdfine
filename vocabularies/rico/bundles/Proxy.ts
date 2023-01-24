import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConceptMixin } from '../lib/Concept';
import { ProxyMixin } from '../lib/Proxy';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RecordSetMixin } from '../lib/RecordSet';

export const ProxyBundle = [
  ConceptMixin as Mixin,
  ProxyMixin as Mixin,
  RecordResourceMixin as Mixin,
  RecordSetMixin as Mixin];
