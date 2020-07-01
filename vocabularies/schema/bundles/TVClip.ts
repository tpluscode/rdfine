import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClipMixin } from '../Clip';
import { TVClipMixin } from '../TVClip';
import { TVSeriesMixin } from '../TVSeries';

export const TVClipBundle = [
  ClipMixin as Mixin,
  TVClipMixin as Mixin,
  TVSeriesMixin as Mixin];
