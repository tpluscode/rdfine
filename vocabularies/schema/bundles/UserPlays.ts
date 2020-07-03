import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserPlaysMixin } from '../UserPlays';

export const UserPlaysBundle = [
  UserInteractionMixin as Mixin,
  UserPlaysMixin as Mixin];
