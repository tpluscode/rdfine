import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AuthorshipRelationMixin } from '../lib/AuthorshipRelation.js';
import { ContentTypeMixin } from '../lib/ContentType.js';
import { DocumentaryFormTypeMixin } from '../lib/DocumentaryFormType.js';
import { GroupMixin } from '../lib/Group.js';
import { LanguageMixin } from '../lib/Language.js';
import { LegalStatusMixin } from '../lib/LegalStatus.js';
import { PersonMixin } from '../lib/Person.js';
import { PositionMixin } from '../lib/Position.js';
import { RecordMixin } from '../lib/Record.js';
import { RecordPartMixin } from '../lib/RecordPart.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { RecordSetMixin } from '../lib/RecordSet.js';
import { RecordStateMixin } from '../lib/RecordState.js';

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
