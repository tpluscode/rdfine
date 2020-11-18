import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceOfWorshipMixin } from '../lib/PlaceOfWorship';
import { SynagogueMixin } from '../lib/Synagogue';

export const SynagogueBundle = [
  PlaceOfWorshipMixin as Mixin,
  SynagogueMixin as Mixin];
