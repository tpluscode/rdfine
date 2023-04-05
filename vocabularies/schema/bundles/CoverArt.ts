import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CoverArtMixin } from '../lib/CoverArt';
import { VisualArtworkMixin } from '../lib/VisualArtwork';

export const CoverArtBundle = [
  CoverArtMixin as Mixin,
  VisualArtworkMixin as Mixin];
