import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContentTypeMixin } from '../lib/ContentType';
import { DocumentaryFormTypeMixin } from '../lib/DocumentaryFormType';
import { LanguageMixin } from '../lib/Language';
import { LegalStatusMixin } from '../lib/LegalStatus';
import { RecordMixin } from '../lib/Record';
import { RecordPartMixin } from '../lib/RecordPart';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RecordStateMixin } from '../lib/RecordState';

export const RecordPartBundle = [
  ContentTypeMixin as Mixin,
  DocumentaryFormTypeMixin as Mixin,
  LanguageMixin as Mixin,
  LegalStatusMixin as Mixin,
  RecordMixin as Mixin,
  RecordPartMixin as Mixin,
  RecordResourceMixin as Mixin,
  RecordStateMixin as Mixin];
