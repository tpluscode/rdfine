import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserLikesMixin } from '../UserLikes';

export const UserLikesBundle = [
  UserInteractionMixin as Mixin,
  UserLikesMixin as Mixin];
