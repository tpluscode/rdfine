import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClipMixin } from '../Clip';
import { VideoGameClipMixin } from '../VideoGameClip';

export const VideoGameClipDependencies = [
  ClipMixin as Mixin,
  VideoGameClipMixin as Mixin];
