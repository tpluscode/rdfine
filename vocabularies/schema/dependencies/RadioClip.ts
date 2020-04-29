import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClipMixin } from '../Clip';
import { RadioClipMixin } from '../RadioClip';

export const RadioClipDependencies = [
  ClipMixin as Mixin,
  RadioClipMixin as Mixin];
