import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../lib/UserInteraction';
import { UserLikesMixin } from '../lib/UserLikes';

export const UserLikesBundle = [
  UserInteractionMixin as Mixin,
  UserLikesMixin as Mixin];
