import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { MusicStoreMixin } from '../MusicStore';

export const MusicStoreDependencies = [
  StoreMixin as Mixin,
  MusicStoreMixin as Mixin];
