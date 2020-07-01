import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../Place';
import { AdministrativeAreaMixin } from '../AdministrativeArea';

export const AdministrativeAreaBundle = [
  PlaceMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
