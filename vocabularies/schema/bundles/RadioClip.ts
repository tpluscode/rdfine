import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClipMixin } from '../lib/Clip';
import { RadioClipMixin } from '../lib/RadioClip';

export const RadioClipBundle = [
  ClipMixin as Mixin,
  RadioClipMixin as Mixin];
