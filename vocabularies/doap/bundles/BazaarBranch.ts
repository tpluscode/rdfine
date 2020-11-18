import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../lib/Repository';
import { BazaarBranchMixin } from '../lib/BazaarBranch';

export const BazaarBranchBundle = [
  RepositoryMixin as Mixin,
  BazaarBranchMixin as Mixin];
