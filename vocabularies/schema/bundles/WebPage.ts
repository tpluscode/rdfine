import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { WebPageMixin } from '../lib/WebPage';
import { BreadcrumbListMixin } from '../lib/BreadcrumbList';
import { WebPageElementMixin } from '../lib/WebPageElement';
import { ImageObjectMixin } from '../lib/ImageObject';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { SpeakableSpecificationMixin } from '../lib/SpeakableSpecification';

export const WebPageBundle = [
  CreativeWorkMixin as Mixin,
  WebPageMixin as Mixin,
  BreadcrumbListMixin as Mixin,
  WebPageElementMixin as Mixin,
  ImageObjectMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  SpeakableSpecificationMixin as Mixin];
