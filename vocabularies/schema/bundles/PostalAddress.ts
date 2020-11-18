import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContactPointMixin } from '../lib/ContactPoint';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { CountryMixin } from '../lib/Country';

export const PostalAddressBundle = [
  ContactPointMixin as Mixin,
  PostalAddressMixin as Mixin,
  CountryMixin as Mixin];
