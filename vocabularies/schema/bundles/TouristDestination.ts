import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../Place';
import { TouristDestinationMixin } from '../TouristDestination';
import { TouristAttractionMixin } from '../TouristAttraction';
import { AudienceMixin } from '../Audience';

export const TouristDestinationBundle = [
  PlaceMixin as Mixin,
  TouristDestinationMixin as Mixin,
  TouristAttractionMixin as Mixin,
  AudienceMixin as Mixin];
