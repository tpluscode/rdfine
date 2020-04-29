import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GameMixin } from '../Game';
import { SoftwareApplicationMixin } from '../SoftwareApplication';
import { VideoGameMixin } from '../VideoGame';
import { PersonMixin } from '../Person';
import { CreativeWorkMixin } from '../CreativeWork';
import { ThingMixin } from '../Thing';
import { GameServerMixin } from '../GameServer';
import { MusicGroupMixin } from '../MusicGroup';
import { VideoObjectMixin } from '../VideoObject';

export const VideoGameDependencies = [
  GameMixin as Mixin,
  SoftwareApplicationMixin as Mixin,
  VideoGameMixin as Mixin,
  PersonMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ThingMixin as Mixin,
  GameServerMixin as Mixin,
  MusicGroupMixin as Mixin,
  VideoObjectMixin as Mixin];
