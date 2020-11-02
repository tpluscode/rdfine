import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../Organization';
import { NewsMediaOrganizationMixin } from '../NewsMediaOrganization';
import { CreativeWorkMixin } from '../CreativeWork';
import { ArticleMixin } from '../Article';
import { AboutPageMixin } from '../AboutPage';

export const NewsMediaOrganizationBundle = [
  OrganizationMixin as Mixin,
  NewsMediaOrganizationMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ArticleMixin as Mixin,
  AboutPageMixin as Mixin];
