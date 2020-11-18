import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { SoftwareSourceCodeMixin } from '../lib/SoftwareSourceCode';
import { ComputerLanguageMixin } from '../lib/ComputerLanguage';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';

export const SoftwareSourceCodeBundle = [
  CreativeWorkMixin as Mixin,
  SoftwareSourceCodeMixin as Mixin,
  ComputerLanguageMixin as Mixin,
  SoftwareApplicationMixin as Mixin];
