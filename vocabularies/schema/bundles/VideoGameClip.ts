import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClipMixin } from '../lib/Clip';
import { VideoGameClipMixin } from '../lib/VideoGameClip';

export const VideoGameClipBundle = [
  ClipMixin as Mixin,
  VideoGameClipMixin as Mixin];
