import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IdentifierMixin } from '../lib/Identifier';
import { IdentifierTypeMixin } from '../lib/IdentifierType';
import { TypeMixin } from '../lib/Type';

export const IdentifierTypeBundle = [
  IdentifierMixin as Mixin,
  IdentifierTypeMixin as Mixin,
  TypeMixin as Mixin];
