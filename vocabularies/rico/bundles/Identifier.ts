import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AppellationMixin } from '../lib/Appellation';
import { IdentifierMixin } from '../lib/Identifier';
import { IdentifierTypeMixin } from '../lib/IdentifierType';
import { ThingMixin } from '../lib/Thing';

export const IdentifierBundle = [
  AppellationMixin as Mixin,
  IdentifierMixin as Mixin,
  IdentifierTypeMixin as Mixin,
  ThingMixin as Mixin];
