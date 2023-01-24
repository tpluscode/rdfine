import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { LegalStatusMixin } from '../lib/LegalStatus';
import { RecordMixin } from '../lib/Record';
import { RecordPartMixin } from '../lib/RecordPart';
import { RecordSetMixin } from '../lib/RecordSet';
import { TypeMixin } from '../lib/Type';

export const LegalStatusBundle = [
  AgentMixin as Mixin,
  LegalStatusMixin as Mixin,
  RecordMixin as Mixin,
  RecordPartMixin as Mixin,
  RecordSetMixin as Mixin,
  TypeMixin as Mixin];
