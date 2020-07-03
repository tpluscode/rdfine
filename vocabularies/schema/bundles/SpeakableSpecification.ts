import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { SpeakableSpecificationMixin } from '../SpeakableSpecification';

export const SpeakableSpecificationBundle = [
  IntangibleMixin as Mixin,
  SpeakableSpecificationMixin as Mixin];
