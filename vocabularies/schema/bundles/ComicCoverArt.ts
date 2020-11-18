import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ComicStoryMixin } from '../lib/ComicStory';
import { CoverArtMixin } from '../lib/CoverArt';
import { ComicCoverArtMixin } from '../lib/ComicCoverArt';

export const ComicCoverArtBundle = [
  ComicStoryMixin as Mixin,
  CoverArtMixin as Mixin,
  ComicCoverArtMixin as Mixin];
