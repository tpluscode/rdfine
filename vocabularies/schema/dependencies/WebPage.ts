import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { WebPageMixin } from '../WebPage';
import { BreadcrumbListMixin } from '../BreadcrumbList';
import { WebPageElementMixin } from '../WebPageElement';
import { ImageObjectMixin } from '../ImageObject';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { SpeakableSpecificationMixin } from '../SpeakableSpecification';

export const WebPageDependencies = [
  CreativeWorkMixin as Mixin,
  WebPageMixin as Mixin,
  BreadcrumbListMixin as Mixin,
  WebPageElementMixin as Mixin,
  ImageObjectMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  SpeakableSpecificationMixin as Mixin];
