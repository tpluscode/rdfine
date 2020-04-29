import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlaceOfWorshipMixin } from '../PlaceOfWorship';
import { MosqueMixin } from '../Mosque';

export const MosqueDependencies = [
  PlaceOfWorshipMixin as Mixin,
  MosqueMixin as Mixin];
