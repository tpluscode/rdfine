import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../Repository';
import { BazaarBranchMixin } from '../BazaarBranch';

export const BazaarBranchBundle = [
  RepositoryMixin as Mixin,
  BazaarBranchMixin as Mixin];
