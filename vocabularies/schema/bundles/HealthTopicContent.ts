import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebContentMixin } from '../WebContent';
import { HealthTopicContentMixin } from '../HealthTopicContent';

export const HealthTopicContentBundle = [
  WebContentMixin as Mixin,
  HealthTopicContentMixin as Mixin];
