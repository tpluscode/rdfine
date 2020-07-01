import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';
import { ArtGalleryMixin } from '../ArtGallery';

export const ArtGalleryBundle = [
  EntertainmentBusinessMixin as Mixin,
  ArtGalleryMixin as Mixin];
