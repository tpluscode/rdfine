import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { StoreMixin } from '../Store';
import { AutoPartsStoreMixin } from '../AutoPartsStore';

export const AutoPartsStoreBundle = [
  AutomotiveBusinessMixin as Mixin,
  StoreMixin as Mixin,
  AutoPartsStoreMixin as Mixin];
