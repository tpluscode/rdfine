import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClipMixin } from '../lib/Clip';
import { TVClipMixin } from '../lib/TVClip';
import { TVSeriesMixin } from '../lib/TVSeries';

export const TVClipBundle = [
  ClipMixin as Mixin,
  TVClipMixin as Mixin,
  TVSeriesMixin as Mixin];
