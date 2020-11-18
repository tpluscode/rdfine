import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';
import { StoreMixin } from '../lib/Store';
import { AutoPartsStoreMixin } from '../lib/AutoPartsStore';

export const AutoPartsStoreBundle = [
  AutomotiveBusinessMixin as Mixin,
  StoreMixin as Mixin,
  AutoPartsStoreMixin as Mixin];
