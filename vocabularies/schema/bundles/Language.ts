import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { LanguageMixin } from '../Language';

export const LanguageBundle = [
  IntangibleMixin as Mixin,
  LanguageMixin as Mixin];
