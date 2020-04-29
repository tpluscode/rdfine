import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { OfficeEquipmentStoreMixin } from '../OfficeEquipmentStore';

export const OfficeEquipmentStoreDependencies = [
  StoreMixin as Mixin,
  OfficeEquipmentStoreMixin as Mixin];
