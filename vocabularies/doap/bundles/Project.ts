import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ProjectMixin } from '../lib/Project';
import { RepositoryMixin } from '../lib/Repository';
import { SpecificationMixin } from '../lib/Specification';
import { VersionMixin } from '../lib/Version';

export const ProjectBundle = [
  ProjectMixin as Mixin,
  RepositoryMixin as Mixin,
  SpecificationMixin as Mixin,
  VersionMixin as Mixin];
