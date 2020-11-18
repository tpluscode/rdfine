import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { PublicationIssueMixin } from '../lib/PublicationIssue';

export const PublicationIssueBundle = [
  CreativeWorkMixin as Mixin,
  PublicationIssueMixin as Mixin];
