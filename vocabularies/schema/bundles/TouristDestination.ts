import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { TouristDestinationMixin } from '../lib/TouristDestination';
import { TouristAttractionMixin } from '../lib/TouristAttraction';
import { AudienceMixin } from '../lib/Audience';

export const TouristDestinationBundle = [
  PlaceMixin as Mixin,
  TouristDestinationMixin as Mixin,
  TouristAttractionMixin as Mixin,
  AudienceMixin as Mixin];
