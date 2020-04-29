import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ComputerLanguageMixin } from '../ComputerLanguage';

export const ComputerLanguageDependencies = [
  IntangibleMixin as Mixin,
  ComputerLanguageMixin as Mixin];
