import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ProjectMixin } from './Project.js';

export interface ResearchProject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Project<D>, rdfine.RdfResource<D> {
}

export function ResearchProjectMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ResearchProject & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ResearchProjectClass extends ProjectMixin(Resource) {
  }
  return ResearchProjectClass as any
}

class ResearchProjectImpl extends ResearchProjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ResearchProject>) {
    super(arg, init)
    this.types.add(schema.ResearchProject)
  }

  static readonly __mixins: Mixin[] = [ResearchProjectMixin, ProjectMixin];
}
ResearchProjectMixin.appliesTo = schema.ResearchProject
ResearchProjectMixin.Class = ResearchProjectImpl

export const fromPointer = createFactory<ResearchProject>([ProjectMixin, ResearchProjectMixin], { types: [schema.ResearchProject] });
