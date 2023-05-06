import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface Project<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
}

export function ProjectMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Project> & RdfResourceCore> & Base {
  @namespace(schema)
  class ProjectClass extends OrganizationMixin(Resource) implements Partial<Project> {
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

export const fromPointer = createFactory<Project>([OrganizationMixin, ProjectMixin], { types: [schema.Project] });
