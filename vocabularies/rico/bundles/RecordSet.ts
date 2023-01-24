import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContentTypeMixin } from '../lib/ContentType';
import { DocumentaryFormTypeMixin } from '../lib/DocumentaryFormType';
import { LanguageMixin } from '../lib/Language';
import { LegalStatusMixin } from '../lib/LegalStatus';
import { RecordMixin } from '../lib/Record';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RecordSetMixin } from '../lib/RecordSet';
import { RecordSetTypeMixin } from '../lib/RecordSetType';
import { RecordStateMixin } from '../lib/RecordState';
import { TypeMixin } from '../lib/Type';

export const RecordSetBundle = [
  ContentTypeMixin as Mixin,
  DocumentaryFormTypeMixin as Mixin,
  LanguageMixin as Mixin,
  LegalStatusMixin as Mixin,
  RecordMixin as Mixin,
  RecordResourceMixin as Mixin,
  RecordSetMixin as Mixin,
  RecordSetTypeMixin as Mixin,
  RecordStateMixin as Mixin,
  TypeMixin as Mixin];
