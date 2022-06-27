import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../lib/AutomotiveBusiness';
import { AutoPartsStoreMixin } from '../lib/AutoPartsStore';
import { StoreMixin } from '../lib/Store';

export const AutoPartsStoreBundle = [
  AutomotiveBusinessMixin as Mixin,
  AutoPartsStoreMixin as Mixin,
  StoreMixin as Mixin];
