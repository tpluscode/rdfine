import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContactPointMixin } from '../lib/ContactPoint';
import { CountryMixin } from '../lib/Country';
import { PostalAddressMixin } from '../lib/PostalAddress';

export const PostalAddressBundle = [
  ContactPointMixin as Mixin,
  CountryMixin as Mixin,
  PostalAddressMixin as Mixin];
