import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContactPageMixin } from '../lib/ContactPage';
import { WebPageMixin } from '../lib/WebPage';

export const ContactPageBundle = [
  ContactPageMixin as Mixin,
  WebPageMixin as Mixin];
