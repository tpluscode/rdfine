import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { OutletStoreMixin } from '../OutletStore';

export const OutletStoreDependencies = [
  StoreMixin as Mixin,
  OutletStoreMixin as Mixin];
