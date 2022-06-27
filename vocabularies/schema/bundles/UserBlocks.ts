import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserBlocksMixin } from '../lib/UserBlocks';
import { UserInteractionMixin } from '../lib/UserInteraction';

export const UserBlocksBundle = [
  UserBlocksMixin as Mixin,
  UserInteractionMixin as Mixin];
