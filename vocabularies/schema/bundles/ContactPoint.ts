import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { ContactPointMixin } from '../lib/ContactPoint';
import { PlaceMixin } from '../lib/Place';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { GeoShapeMixin } from '../lib/GeoShape';
import { LanguageMixin } from '../lib/Language';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';
import { ProductMixin } from '../lib/Product';

export const ContactPointBundle = [
  StructuredValueMixin as Mixin,
  ContactPointMixin as Mixin,
  PlaceMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  LanguageMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  ProductMixin as Mixin];
