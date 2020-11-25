import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';

export interface Project<ID extends ResourceNode = ResourceNode> extends RdfResource<ID> {
}

export function ProjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(foaf)
  class ProjectClass extends Resource implements Project {
  }
  return ProjectClass
}

class ProjectImpl extends ProjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Project>) {
    super(arg, init)
    this.types.add(foaf.Project)
  }

  static readonly __mixins: Mixin[] = [ProjectMixin];
}
ProjectMixin.appliesTo = foaf.Project
ProjectMixin.Class = ProjectImpl
