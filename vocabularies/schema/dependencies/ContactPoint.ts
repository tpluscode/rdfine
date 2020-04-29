import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StructuredValueMixin } from '../StructuredValue';
import { ContactPointMixin } from '../ContactPoint';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { GeoShapeMixin } from '../GeoShape';
import { PlaceMixin } from '../Place';
import { LanguageMixin } from '../Language';
import { OpeningHoursSpecificationMixin } from '../OpeningHoursSpecification';
import { ProductMixin } from '../Product';

export const ContactPointDependencies = [
  StructuredValueMixin as Mixin,
  ContactPointMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  PlaceMixin as Mixin,
  LanguageMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  ProductMixin as Mixin];
