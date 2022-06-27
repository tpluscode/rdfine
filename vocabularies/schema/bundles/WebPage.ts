import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BreadcrumbListMixin } from '../lib/BreadcrumbList';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ImageObjectMixin } from '../lib/ImageObject';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { SpeakableSpecificationMixin } from '../lib/SpeakableSpecification';
import { WebPageElementMixin } from '../lib/WebPageElement';
import { WebPageMixin } from '../lib/WebPage';

export const WebPageBundle = [
  BreadcrumbListMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ImageObjectMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  SpeakableSpecificationMixin as Mixin,
  WebPageElementMixin as Mixin,
  WebPageMixin as Mixin];
