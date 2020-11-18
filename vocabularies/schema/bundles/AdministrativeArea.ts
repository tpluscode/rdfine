import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceMixin } from '../lib/Place';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';

export const AdministrativeAreaBundle = [
  PlaceMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
