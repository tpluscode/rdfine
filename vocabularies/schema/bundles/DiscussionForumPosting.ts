import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SocialMediaPostingMixin } from '../SocialMediaPosting';
import { DiscussionForumPostingMixin } from '../DiscussionForumPosting';

export const DiscussionForumPostingBundle = [
  SocialMediaPostingMixin as Mixin,
  DiscussionForumPostingMixin as Mixin];
