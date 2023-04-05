import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MusicStoreMixin } from '../lib/MusicStore';
import { StoreMixin } from '../lib/Store';

export const MusicStoreBundle = [
  MusicStoreMixin as Mixin,
  StoreMixin as Mixin];
