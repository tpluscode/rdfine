import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ComicCoverArtMixin } from '../lib/ComicCoverArt';
import { ComicStoryMixin } from '../lib/ComicStory';
import { CoverArtMixin } from '../lib/CoverArt';

export const ComicCoverArtBundle = [
  ComicCoverArtMixin as Mixin,
  ComicStoryMixin as Mixin,
  CoverArtMixin as Mixin];
