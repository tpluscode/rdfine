import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudioObjectMixin } from '../AudioObject';
import { BookMixin } from '../Book';
import { AudiobookMixin } from '../Audiobook';
import { DurationMixin } from '../Duration';
import { PersonMixin } from '../Person';

export const AudiobookBundle = [
  AudioObjectMixin as Mixin,
  BookMixin as Mixin,
  AudiobookMixin as Mixin,
  DurationMixin as Mixin,
  PersonMixin as Mixin];
