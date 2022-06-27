import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GitBranchMixin } from '../lib/GitBranch';
import { RepositoryMixin } from '../lib/Repository';

export const GitBranchBundle = [
  GitBranchMixin as Mixin,
  RepositoryMixin as Mixin];
