import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../lib/UserInteraction';
import { UserPlaysMixin } from '../lib/UserPlays';

export const UserPlaysBundle = [
  UserInteractionMixin as Mixin,
  UserPlaysMixin as Mixin];
