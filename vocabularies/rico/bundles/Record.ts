import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AuthorshipRelationMixin } from '../lib/AuthorshipRelation';
import { ContentTypeMixin } from '../lib/ContentType';
import { DocumentaryFormTypeMixin } from '../lib/DocumentaryFormType';
import { GroupMixin } from '../lib/Group';
import { LanguageMixin } from '../lib/Language';
import { LegalStatusMixin } from '../lib/LegalStatus';
import { PersonMixin } from '../lib/Person';
import { PositionMixin } from '../lib/Position';
import { RecordMixin } from '../lib/Record';
import { RecordPartMixin } from '../lib/RecordPart';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RecordSetMixin } from '../lib/RecordSet';
import { RecordStateMixin } from '../lib/RecordState';

export const RecordBundle = [
  AuthorshipRelationMixin as Mixin,
  ContentTypeMixin as Mixin,
  DocumentaryFormTypeMixin as Mixin,
  GroupMixin as Mixin,
  LanguageMixin as Mixin,
  LegalStatusMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin,
  RecordMixin as Mixin,
  RecordPartMixin as Mixin,
  RecordResourceMixin as Mixin,
  RecordSetMixin as Mixin,
  RecordStateMixin as Mixin];
