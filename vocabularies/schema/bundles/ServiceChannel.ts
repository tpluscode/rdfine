import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ServiceChannelMixin } from '../ServiceChannel';
import { LanguageMixin } from '../Language';
import { DurationMixin } from '../Duration';
import { ServiceMixin } from '../Service';
import { PlaceMixin } from '../Place';
import { ContactPointMixin } from '../ContactPoint';
import { PostalAddressMixin } from '../PostalAddress';

export const ServiceChannelBundle = [
  IntangibleMixin as Mixin,
  ServiceChannelMixin as Mixin,
  LanguageMixin as Mixin,
  DurationMixin as Mixin,
  ServiceMixin as Mixin,
  PlaceMixin as Mixin,
  ContactPointMixin as Mixin,
  PostalAddressMixin as Mixin];
