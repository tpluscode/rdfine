import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UserInteractionMixin } from '../UserInteraction';
import { UserTweetsMixin } from '../UserTweets';

export const UserTweetsDependencies = [
  UserInteractionMixin as Mixin,
  UserTweetsMixin as Mixin];
