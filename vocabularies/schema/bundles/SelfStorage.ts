import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { SelfStorageMixin } from '../SelfStorage';

export const SelfStorageBundle = [
  LocalBusinessMixin as Mixin,
  SelfStorageMixin as Mixin];
