import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DocumentMixin } from '../lib/Document';
import { VideoMixin } from '../lib/Video';

export const VideoBundle = [
  DocumentMixin as Mixin,
  VideoMixin as Mixin];
