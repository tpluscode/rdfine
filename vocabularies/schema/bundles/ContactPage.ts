import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../lib/WebPage';
import { ContactPageMixin } from '../lib/ContactPage';

export const ContactPageBundle = [
  WebPageMixin as Mixin,
  ContactPageMixin as Mixin];
