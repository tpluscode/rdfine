import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { SpeakableSpecificationMixin } from '../SpeakableSpecification';

export const SpeakableSpecificationDependencies = [
  IntangibleMixin as Mixin,
  SpeakableSpecificationMixin as Mixin];
