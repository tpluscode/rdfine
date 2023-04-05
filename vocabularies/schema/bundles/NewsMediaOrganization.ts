import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AboutPageMixin } from '../lib/AboutPage';
import { ArticleMixin } from '../lib/Article';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { NewsMediaOrganizationMixin } from '../lib/NewsMediaOrganization';
import { OrganizationMixin } from '../lib/Organization';

export const NewsMediaOrganizationBundle = [
  AboutPageMixin as Mixin,
  ArticleMixin as Mixin,
  CreativeWorkMixin as Mixin,
  NewsMediaOrganizationMixin as Mixin,
  OrganizationMixin as Mixin];
