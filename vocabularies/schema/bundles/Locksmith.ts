import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HomeAndConstructionBusinessMixin } from '../lib/HomeAndConstructionBusiness';
import { LocksmithMixin } from '../lib/Locksmith';

export const LocksmithBundle = [
  HomeAndConstructionBusinessMixin as Mixin,
  LocksmithMixin as Mixin];
