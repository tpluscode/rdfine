import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GameServerMixin } from '../lib/GameServer';
import { IntangibleMixin } from '../lib/Intangible';
import { VideoGameMixin } from '../lib/VideoGame';

export const GameServerBundle = [
  GameServerMixin as Mixin,
  IntangibleMixin as Mixin,
  VideoGameMixin as Mixin];
