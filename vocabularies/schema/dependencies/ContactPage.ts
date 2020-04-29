import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { ContactPageMixin } from '../ContactPage';

export const ContactPageDependencies = [
  WebPageMixin as Mixin,
  ContactPageMixin as Mixin];
