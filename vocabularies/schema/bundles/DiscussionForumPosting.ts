import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SocialMediaPostingMixin } from '../lib/SocialMediaPosting';
import { DiscussionForumPostingMixin } from '../lib/DiscussionForumPosting';

export const DiscussionForumPostingBundle = [
  SocialMediaPostingMixin as Mixin,
  DiscussionForumPostingMixin as Mixin];
