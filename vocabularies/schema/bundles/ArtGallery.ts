import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';
import { ArtGalleryMixin } from '../lib/ArtGallery';

export const ArtGalleryBundle = [
  EntertainmentBusinessMixin as Mixin,
  ArtGalleryMixin as Mixin];
