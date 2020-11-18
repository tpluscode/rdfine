import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PublicationIssueMixin } from '../lib/PublicationIssue';
import { ComicIssueMixin } from '../lib/ComicIssue';
import { PersonMixin } from '../lib/Person';

export const ComicIssueBundle = [
  PublicationIssueMixin as Mixin,
  ComicIssueMixin as Mixin,
  PersonMixin as Mixin];
