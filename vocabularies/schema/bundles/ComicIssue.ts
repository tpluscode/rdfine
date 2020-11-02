import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PublicationIssueMixin } from '../PublicationIssue';
import { ComicIssueMixin } from '../ComicIssue';
import { PersonMixin } from '../Person';

export const ComicIssueBundle = [
  PublicationIssueMixin as Mixin,
  ComicIssueMixin as Mixin,
  PersonMixin as Mixin];
