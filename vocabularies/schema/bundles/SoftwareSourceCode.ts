import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { SoftwareSourceCodeMixin } from '../SoftwareSourceCode';
import { ComputerLanguageMixin } from '../ComputerLanguage';
import { SoftwareApplicationMixin } from '../SoftwareApplication';

export const SoftwareSourceCodeBundle = [
  CreativeWorkMixin as Mixin,
  SoftwareSourceCodeMixin as Mixin,
  ComputerLanguageMixin as Mixin,
  SoftwareApplicationMixin as Mixin];
