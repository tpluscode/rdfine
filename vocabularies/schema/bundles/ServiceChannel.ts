import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContactPointMixin } from '../lib/ContactPoint';
import { DurationMixin } from '../lib/Duration';
import { IntangibleMixin } from '../lib/Intangible';
import { LanguageMixin } from '../lib/Language';
import { PlaceMixin } from '../lib/Place';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { ServiceChannelMixin } from '../lib/ServiceChannel';
import { ServiceMixin } from '../lib/Service';

export const ServiceChannelBundle = [
  ContactPointMixin as Mixin,
  DurationMixin as Mixin,
  IntangibleMixin as Mixin,
  LanguageMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin,
  ServiceChannelMixin as Mixin,
  ServiceMixin as Mixin];
