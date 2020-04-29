import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AutomotiveBusinessMixin } from '../AutomotiveBusiness';
import { StoreMixin } from '../Store';
import { AutoPartsStoreMixin } from '../AutoPartsStore';

export const AutoPartsStoreDependencies = [
  AutomotiveBusinessMixin as Mixin,
  StoreMixin as Mixin,
  AutoPartsStoreMixin as Mixin];
