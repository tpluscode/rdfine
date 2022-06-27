import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ComputerLanguageMixin } from '../lib/ComputerLanguage';
import { IntangibleMixin } from '../lib/Intangible';

export const ComputerLanguageBundle = [
  ComputerLanguageMixin as Mixin,
  IntangibleMixin as Mixin];
