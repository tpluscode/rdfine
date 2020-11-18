import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { SelfStorageMixin } from '../lib/SelfStorage';

export const SelfStorageBundle = [
  LocalBusinessMixin as Mixin,
  SelfStorageMixin as Mixin];
