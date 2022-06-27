import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LanguageMixin } from '../lib/Language';
import { PronounceableTextMixin } from '../lib/PronounceableText';

export const PronounceableTextBundle = [
  LanguageMixin as Mixin,
  PronounceableTextMixin as Mixin];
