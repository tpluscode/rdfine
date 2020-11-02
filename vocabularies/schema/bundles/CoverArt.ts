import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { VisualArtworkMixin } from '../VisualArtwork';
import { CoverArtMixin } from '../CoverArt';

export const CoverArtBundle = [
  VisualArtworkMixin as Mixin,
  CoverArtMixin as Mixin];
