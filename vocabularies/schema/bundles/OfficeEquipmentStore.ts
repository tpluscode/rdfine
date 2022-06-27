import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OfficeEquipmentStoreMixin } from '../lib/OfficeEquipmentStore';
import { StoreMixin } from '../lib/Store';

export const OfficeEquipmentStoreBundle = [
  OfficeEquipmentStoreMixin as Mixin,
  StoreMixin as Mixin];
