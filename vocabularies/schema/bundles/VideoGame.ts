import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { GameMixin } from '../lib/Game';
import { GameServerMixin } from '../lib/GameServer';
import { MusicGroupMixin } from '../lib/MusicGroup';
import { PersonMixin } from '../lib/Person';
import { SoftwareApplicationMixin } from '../lib/SoftwareApplication';
import { ThingMixin } from '../lib/Thing';
import { VideoGameMixin } from '../lib/VideoGame';
import { VideoObjectMixin } from '../lib/VideoObject';

export const VideoGameBundle = [
  CreativeWorkMixin as Mixin,
  GameMixin as Mixin,
  GameServerMixin as Mixin,
  MusicGroupMixin as Mixin,
  PersonMixin as Mixin,
  SoftwareApplicationMixin as Mixin,
  ThingMixin as Mixin,
  VideoGameMixin as Mixin,
  VideoObjectMixin as Mixin];
