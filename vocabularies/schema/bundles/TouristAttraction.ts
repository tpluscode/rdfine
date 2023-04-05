import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AudienceMixin } from '../lib/Audience';
import { LanguageMixin } from '../lib/Language';
import { PlaceMixin } from '../lib/Place';
import { TouristAttractionMixin } from '../lib/TouristAttraction';

export const TouristAttractionBundle = [
  AudienceMixin as Mixin,
  LanguageMixin as Mixin,
  PlaceMixin as Mixin,
  TouristAttractionMixin as Mixin];
