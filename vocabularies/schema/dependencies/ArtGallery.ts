import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EntertainmentBusinessMixin } from '../EntertainmentBusiness';
import { ArtGalleryMixin } from '../ArtGallery';

export const ArtGalleryDependencies = [
  EntertainmentBusinessMixin as Mixin,
  ArtGalleryMixin as Mixin];
