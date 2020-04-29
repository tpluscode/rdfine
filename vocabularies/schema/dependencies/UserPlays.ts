import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserPlaysMixin } from '../UserPlays';

export const UserPlaysDependencies = [
  UserInteractionMixin as Mixin,
  UserPlaysMixin as Mixin];
