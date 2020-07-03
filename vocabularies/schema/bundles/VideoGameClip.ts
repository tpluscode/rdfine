import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClipMixin } from '../Clip';
import { VideoGameClipMixin } from '../VideoGameClip';

export const VideoGameClipBundle = [
  ClipMixin as Mixin,
  VideoGameClipMixin as Mixin];
