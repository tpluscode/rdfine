import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { GuideMixin } from '../lib/Guide';

export const GuideBundle = [
  CreativeWorkMixin as Mixin,
  GuideMixin as Mixin];
