import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../HomeAndConstructionBusiness';
import { LocksmithMixin } from '../Locksmith';

export const LocksmithBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  LocksmithMixin as Mixin];
