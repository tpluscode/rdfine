import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GameMixin } from '../lib/Game';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';
import { VideoGameMixin } from '../lib/VideoGame';
import { PersonMixin } from '../lib/Person';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ThingMixin } from '../lib/Thing';
import { GameServerMixin } from '../lib/GameServer';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { VideoObjectMixin } from '../lib/VideoObject';

export const VideoGameBundle = [
  GameMixin as Mixin,
  SoftwareApplicationMixin as Mixin,
  VideoGameMixin as Mixin,
  PersonMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ThingMixin as Mixin,
  GameServerMixin as Mixin,
  MusicGroupMixin as Mixin,
  VideoObjectMixin as Mixin];
