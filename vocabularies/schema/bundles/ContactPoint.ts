import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../lib/StructuredValue';
import { ContactPointMixin } from '../lib/ContactPoint';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { GeoShapeMixin } from '../lib/GeoShape';
import { PlaceMixin } from '../lib/Place';
import { LanguageMixin } from '../lib/Language';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';
import { ProductMixin } from '../lib/Product';

export const ContactPointBundle = [
  StructuredValueMixin as Mixin,
  ContactPointMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  PlaceMixin as Mixin,
  LanguageMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  ProductMixin as Mixin];
