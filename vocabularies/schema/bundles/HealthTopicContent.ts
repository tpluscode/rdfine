import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebContentMixin } from '../lib/WebContent';
import { HealthTopicContentMixin } from '../lib/HealthTopicContent';

export const HealthTopicContentBundle = [
  WebContentMixin as Mixin,
  HealthTopicContentMixin as Mixin];
