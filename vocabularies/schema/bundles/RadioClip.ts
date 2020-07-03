import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClipMixin } from '../Clip';
import { RadioClipMixin } from '../RadioClip';

export const RadioClipBundle = [
  ClipMixin as Mixin,
  RadioClipMixin as Mixin];
