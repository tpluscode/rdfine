import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { PublicationIssueMixin } from '../PublicationIssue';

export const PublicationIssueDependencies = [
  CreativeWorkMixin as Mixin,
  PublicationIssueMixin as Mixin];
