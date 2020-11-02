import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PronounceableTextMixin } from '../PronounceableText';
import { LanguageMixin } from '../Language';

export const PronounceableTextBundle = [
  PronounceableTextMixin as Mixin,
  LanguageMixin as Mixin];
