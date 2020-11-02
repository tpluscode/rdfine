import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SpecificationMixin } from '../Specification';
import { VersionMixin } from '../Version';
import { RepositoryMixin } from '../Repository';

export const ProjectBundle = [
  SpecificationMixin as Mixin,
  VersionMixin as Mixin,
  RepositoryMixin as Mixin];
