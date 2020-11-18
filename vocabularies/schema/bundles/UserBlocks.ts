import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../lib/UserInteraction';
import { UserBlocksMixin } from '../lib/UserBlocks';

export const UserBlocksBundle = [
  UserInteractionMixin as Mixin,
  UserBlocksMixin as Mixin];
