import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BazaarBranchMixin } from '../lib/BazaarBranch';
import { RepositoryMixin } from '../lib/Repository';

export const BazaarBranchBundle = [
  BazaarBranchMixin as Mixin,
  RepositoryMixin as Mixin];
