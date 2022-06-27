import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { PlaceMixin } from '../lib/Place';
import { TouristAttractionMixin } from '../lib/TouristAttraction';
import { TouristDestinationMixin } from '../lib/TouristDestination';

export const TouristDestinationBundle = [
  AudienceMixin as Mixin,
  PlaceMixin as Mixin,
  TouristAttractionMixin as Mixin,
  TouristDestinationMixin as Mixin];
