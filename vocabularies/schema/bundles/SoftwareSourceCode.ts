import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ComputerLanguageMixin } from '../lib/ComputerLanguage';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';
import { SoftwareSourceCodeMixin } from '../lib/SoftwareSourceCode';

export const SoftwareSourceCodeBundle = [
  ComputerLanguageMixin as Mixin,
  CreativeWorkMixin as Mixin,
  SoftwareApplicationMixin as Mixin,
  SoftwareSourceCodeMixin as Mixin];
