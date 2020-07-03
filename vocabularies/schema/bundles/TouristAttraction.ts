import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../Place';
import { TouristAttractionMixin } from '../TouristAttraction';
import { LanguageMixin } from '../Language';
import { AudienceMixin } from '../Audience';

export const TouristAttractionBundle = [
  PlaceMixin as Mixin,
  TouristAttractionMixin as Mixin,
  LanguageMixin as Mixin,
  AudienceMixin as Mixin];
