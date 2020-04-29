import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ContactPointMixin } from '../ContactPoint';
import { PostalAddressMixin } from '../PostalAddress';
import { CountryMixin } from '../Country';

export const PostalAddressDependencies = [
  ContactPointMixin as Mixin,
  PostalAddressMixin as Mixin,
  CountryMixin as Mixin];
