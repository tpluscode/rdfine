import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ServiceChannelMixin } from '../lib/ServiceChannel';
import { LanguageMixin } from '../lib/Language';
import { DurationMixin } from '../lib/Duration';
import { ServiceMixin } from '../lib/Service';
import { PlaceMixin } from '../lib/Place';
import { ContactPointMixin } from '../lib/ContactPoint';
import { PostalAddressMixin } from '../lib/PostalAddress';

export const ServiceChannelBundle = [
  IntangibleMixin as Mixin,
  ServiceChannelMixin as Mixin,
  LanguageMixin as Mixin,
  DurationMixin as Mixin,
  ServiceMixin as Mixin,
  PlaceMixin as Mixin,
  ContactPointMixin as Mixin,
  PostalAddressMixin as Mixin];
