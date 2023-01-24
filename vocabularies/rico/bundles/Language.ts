import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { ConceptMixin } from '../lib/Concept';
import { LanguageMixin } from '../lib/Language';
import { RecordMixin } from '../lib/Record';
import { RecordPartMixin } from '../lib/RecordPart';
import { RecordSetMixin } from '../lib/RecordSet';

export const LanguageBundle = [
  AgentMixin as Mixin,
  ConceptMixin as Mixin,
  LanguageMixin as Mixin,
  RecordMixin as Mixin,
  RecordPartMixin as Mixin,
  RecordSetMixin as Mixin];
