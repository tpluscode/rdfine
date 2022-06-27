import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CatholicChurchMixin } from '../lib/CatholicChurch';
import { ChurchMixin } from '../lib/Church';

export const CatholicChurchBundle = [
  CatholicChurchMixin as Mixin,
  ChurchMixin as Mixin];
