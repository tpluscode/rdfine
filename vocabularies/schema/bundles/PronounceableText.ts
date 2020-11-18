import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PronounceableTextMixin } from '../lib/PronounceableText';
import { LanguageMixin } from '../lib/Language';

export const PronounceableTextBundle = [
  PronounceableTextMixin as Mixin,
  LanguageMixin as Mixin];
