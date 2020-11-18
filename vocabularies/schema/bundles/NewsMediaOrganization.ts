import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { NewsMediaOrganizationMixin } from '../lib/NewsMediaOrganization';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ArticleMixin } from '../lib/Article';
import { AboutPageMixin } from '../lib/AboutPage';

export const NewsMediaOrganizationBundle = [
  OrganizationMixin as Mixin,
  NewsMediaOrganizationMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ArticleMixin as Mixin,
  AboutPageMixin as Mixin];
