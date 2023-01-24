import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreationRelationMixin } from '../lib/CreationRelation';
import { RoleTypeMixin } from '../lib/RoleType';
import { TypeMixin } from '../lib/Type';

export const RoleTypeBundle = [
  CreationRelationMixin as Mixin,
  RoleTypeMixin as Mixin,
  TypeMixin as Mixin];
