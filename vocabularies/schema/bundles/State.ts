import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { StateMixin } from '../lib/State';

export const StateBundle = [
  AdministrativeAreaMixin as Mixin,
  StateMixin as Mixin];
