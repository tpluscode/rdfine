import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { ContactPointMixin } from '../lib/ContactPoint';
import { GeoShapeMixin } from '../lib/GeoShape';
import { LanguageMixin } from '../lib/Language';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';
import { PlaceMixin } from '../lib/Place';
import { ProductMixin } from '../lib/Product';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const ContactPointBundle = [
  AdministrativeAreaMixin as Mixin,
  ContactPointMixin as Mixin,
  GeoShapeMixin as Mixin,
  LanguageMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  PlaceMixin as Mixin,
  ProductMixin as Mixin,
  StructuredValueMixin as Mixin];
