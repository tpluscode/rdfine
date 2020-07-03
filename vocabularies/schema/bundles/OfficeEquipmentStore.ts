import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { OfficeEquipmentStoreMixin } from '../OfficeEquipmentStore';

export const OfficeEquipmentStoreBundle = [
  StoreMixin as Mixin,
  OfficeEquipmentStoreMixin as Mixin];
