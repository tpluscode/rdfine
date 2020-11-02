import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../Repository';
import { GitBranchMixin } from '../GitBranch';

export const GitBranchBundle = [
  RepositoryMixin as Mixin,
  GitBranchMixin as Mixin];
