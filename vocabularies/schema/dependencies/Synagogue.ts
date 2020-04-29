import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceOfWorshipMixin } from '../PlaceOfWorship';
import { SynagogueMixin } from '../Synagogue';

export const SynagogueDependencies = [
  PlaceOfWorshipMixin as Mixin,
  SynagogueMixin as Mixin];
