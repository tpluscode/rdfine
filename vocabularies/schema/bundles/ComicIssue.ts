import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ComicIssueMixin } from '../lib/ComicIssue';
import { PersonMixin } from '../lib/Person';
import { PublicationIssueMixin } from '../lib/PublicationIssue';

export const ComicIssueBundle = [
  ComicIssueMixin as Mixin,
  PersonMixin as Mixin,
  PublicationIssueMixin as Mixin];
