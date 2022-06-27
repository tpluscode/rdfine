import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DiscussionForumPostingMixin } from '../lib/DiscussionForumPosting';
import { SocialMediaPostingMixin } from '../lib/SocialMediaPosting';

export const DiscussionForumPostingBundle = [
  DiscussionForumPostingMixin as Mixin,
  SocialMediaPostingMixin as Mixin];
