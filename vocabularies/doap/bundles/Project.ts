import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SpecificationMixin } from '../lib/Specification';
import { VersionMixin } from '../lib/Version';
import { RepositoryMixin } from '../lib/Repository';
import { ProjectMixin } from '../lib/Project';

export const ProjectBundle = [
  SpecificationMixin as Mixin,
  VersionMixin as Mixin,
  RepositoryMixin as Mixin,
  ProjectMixin as Mixin];
