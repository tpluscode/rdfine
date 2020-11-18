import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';
import { ImageObjectMixin } from '../lib/ImageObject';
import { DataFeedMixin } from '../lib/DataFeed';

export const SoftwareApplicationBundle = [
  CreativeWorkMixin as Mixin,
  SoftwareApplicationMixin as Mixin,
  ImageObjectMixin as Mixin,
  DataFeedMixin as Mixin];
