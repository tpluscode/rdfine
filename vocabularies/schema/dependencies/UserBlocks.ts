import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserBlocksMixin } from '../UserBlocks';

export const UserBlocksDependencies = [
  UserInteractionMixin as Mixin,
  UserBlocksMixin as Mixin];
