import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HealthTopicContentMixin } from '../lib/HealthTopicContent';
import { WebContentMixin } from '../lib/WebContent';

export const HealthTopicContentBundle = [
  HealthTopicContentMixin as Mixin,
  WebContentMixin as Mixin];
