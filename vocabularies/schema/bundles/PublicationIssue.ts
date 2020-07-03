import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { PublicationIssueMixin } from '../PublicationIssue';

export const PublicationIssueBundle = [
  CreativeWorkMixin as Mixin,
  PublicationIssueMixin as Mixin];
