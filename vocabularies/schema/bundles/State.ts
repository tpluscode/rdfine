import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { StateMixin } from '../State';

export const StateBundle = [
  AdministrativeAreaMixin as Mixin,
  StateMixin as Mixin];
