import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { SpeakableSpecificationMixin } from '../lib/SpeakableSpecification';

export const SpeakableSpecificationBundle = [
  IntangibleMixin as Mixin,
  SpeakableSpecificationMixin as Mixin];
