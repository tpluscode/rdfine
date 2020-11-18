import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VisualArtworkMixin } from '../lib/VisualArtwork';
import { CoverArtMixin } from '../lib/CoverArt';

export const CoverArtBundle = [
  VisualArtworkMixin as Mixin,
  CoverArtMixin as Mixin];
