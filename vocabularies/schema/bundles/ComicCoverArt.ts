import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ComicStoryMixin } from '../ComicStory';
import { CoverArtMixin } from '../CoverArt';
import { ComicCoverArtMixin } from '../ComicCoverArt';

export const ComicCoverArtBundle = [
  ComicStoryMixin as Mixin,
  CoverArtMixin as Mixin,
  ComicCoverArtMixin as Mixin];
