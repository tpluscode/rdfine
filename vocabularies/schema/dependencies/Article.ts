import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ArticleMixin } from '../Article';
import { SpeakableSpecificationMixin } from '../SpeakableSpecification';

export const ArticleDependencies = [
  CreativeWorkMixin as Mixin,
  ArticleMixin as Mixin,
  SpeakableSpecificationMixin as Mixin];
