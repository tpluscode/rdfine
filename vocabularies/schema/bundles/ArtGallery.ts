import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArtGalleryMixin } from '../lib/ArtGallery';
import { EntertainmentBusinessMixin } from '../lib/EntertainmentBusiness';

export const ArtGalleryBundle = [
  ArtGalleryMixin as Mixin,
  EntertainmentBusinessMixin as Mixin];
