import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { SoftwareApplicationMixin } from '../SoftwareApplication';
import { ImageObjectMixin } from '../ImageObject';
import { DataFeedMixin } from '../DataFeed';

export const SoftwareApplicationDependencies = [
  CreativeWorkMixin as Mixin,
  SoftwareApplicationMixin as Mixin,
  ImageObjectMixin as Mixin,
  DataFeedMixin as Mixin];
