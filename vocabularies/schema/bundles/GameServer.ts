import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { GameServerMixin } from '../GameServer';
import { VideoGameMixin } from '../VideoGame';

export const GameServerBundle = [
  IntangibleMixin as Mixin,
  GameServerMixin as Mixin,
  VideoGameMixin as Mixin];
