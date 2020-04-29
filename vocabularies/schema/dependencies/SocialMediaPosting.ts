import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../Article';
import { SocialMediaPostingMixin } from '../SocialMediaPosting';
import { CreativeWorkMixin } from '../CreativeWork';

export const SocialMediaPostingDependencies = [
  ArticleMixin as Mixin,
  SocialMediaPostingMixin as Mixin,
  CreativeWorkMixin as Mixin];
