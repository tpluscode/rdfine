import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { RoleMixin } from '../Role';

export const RoleDependencies = [
  IntangibleMixin as Mixin,
  RoleMixin as Mixin];
