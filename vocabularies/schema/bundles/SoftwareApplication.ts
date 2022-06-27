import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DataFeedMixin } from '../lib/DataFeed';
import { ImageObjectMixin } from '../lib/ImageObject';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';

export const SoftwareApplicationBundle = [
  CreativeWorkMixin as Mixin,
  DataFeedMixin as Mixin,
  ImageObjectMixin as Mixin,
  SoftwareApplicationMixin as Mixin];
