import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { LanguageMixin } from '../lib/Language';

export const LanguageBundle = [
  IntangibleMixin as Mixin,
  LanguageMixin as Mixin];
