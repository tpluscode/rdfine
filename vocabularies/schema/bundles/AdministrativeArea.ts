import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { PlaceMixin } from '../lib/Place';

export const AdministrativeAreaBundle = [
  AdministrativeAreaMixin as Mixin,
  PlaceMixin as Mixin];
