import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizationMixin } from './Organization';

export interface Project<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
}

export function ProjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ProjectClass extends OrganizationMixin(Resource) implements Project {
  }
  return ProjectClass
}

class ProjectImpl extends ProjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Project>) {
    super(arg, init)
    this.types.add(schema.Project)
  }

  static readonly __mixins: Mixin[] = [ProjectMixin, OrganizationMixin];
}
ProjectMixin.appliesTo = schema.Project
ProjectMixin.Class = ProjectImpl
