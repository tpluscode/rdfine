import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RepositoryMixin } from '../lib/Repository';
import { GitBranchMixin } from '../lib/GitBranch';

export const GitBranchBundle = [
  RepositoryMixin as Mixin,
  GitBranchMixin as Mixin];
