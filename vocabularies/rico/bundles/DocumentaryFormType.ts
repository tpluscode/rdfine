import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DocumentaryFormTypeMixin } from '../lib/DocumentaryFormType';
import { RecordMixin } from '../lib/Record';
import { RecordPartMixin } from '../lib/RecordPart';
import { RecordSetMixin } from '../lib/RecordSet';
import { TypeMixin } from '../lib/Type';

export const DocumentaryFormTypeBundle = [
  DocumentaryFormTypeMixin as Mixin,
  RecordMixin as Mixin,
  RecordPartMixin as Mixin,
  RecordSetMixin as Mixin,
  TypeMixin as Mixin];
