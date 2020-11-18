import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { TouristAttractionMixin } from '../lib/TouristAttraction';
import { LanguageMixin } from '../lib/Language';
import { AudienceMixin } from '../lib/Audience';

export const TouristAttractionBundle = [
  PlaceMixin as Mixin,
  TouristAttractionMixin as Mixin,
  LanguageMixin as Mixin,
  AudienceMixin as Mixin];
