import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { GuideMixin } from '../Guide';

export const GuideBundle = [
  CreativeWorkMixin as Mixin,
  GuideMixin as Mixin];
