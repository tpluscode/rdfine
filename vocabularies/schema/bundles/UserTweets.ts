import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../lib/UserInteraction';
import { UserTweetsMixin } from '../lib/UserTweets';

export const UserTweetsBundle = [
  UserInteractionMixin as Mixin,
  UserTweetsMixin as Mixin];
