import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SocialMediaPostingMixin } from '../SocialMediaPosting';
import { DiscussionForumPostingMixin } from '../DiscussionForumPosting';

export const DiscussionForumPostingDependencies = [
  SocialMediaPostingMixin as Mixin,
  DiscussionForumPostingMixin as Mixin];
