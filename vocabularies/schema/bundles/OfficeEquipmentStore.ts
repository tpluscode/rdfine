import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { OfficeEquipmentStoreMixin } from '../lib/OfficeEquipmentStore';

export const OfficeEquipmentStoreBundle = [
  StoreMixin as Mixin,
  OfficeEquipmentStoreMixin as Mixin];
