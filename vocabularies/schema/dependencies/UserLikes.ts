import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserLikesMixin } from '../UserLikes';

export const UserLikesDependencies = [
  UserInteractionMixin as Mixin,
  UserLikesMixin as Mixin];
