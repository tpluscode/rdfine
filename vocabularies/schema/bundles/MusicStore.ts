import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { MusicStoreMixin } from '../lib/MusicStore';

export const MusicStoreBundle = [
  StoreMixin as Mixin,
  MusicStoreMixin as Mixin];
