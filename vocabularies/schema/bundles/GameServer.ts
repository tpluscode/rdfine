import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { GameServerMixin } from '../lib/GameServer';
import { VideoGameMixin } from '../lib/VideoGame';

export const GameServerBundle = [
  IntangibleMixin as Mixin,
  GameServerMixin as Mixin,
  VideoGameMixin as Mixin];
