import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';

export const HomeAndConstructionBusinessDependencies = [
  LocalBusinessMixin as Mixin,
  HomeAndConstructionBusinessMixin as Mixin];
