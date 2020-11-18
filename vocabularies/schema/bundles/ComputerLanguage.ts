import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ComputerLanguageMixin } from '../lib/ComputerLanguage';

export const ComputerLanguageBundle = [
  IntangibleMixin as Mixin,
  ComputerLanguageMixin as Mixin];
