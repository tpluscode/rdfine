import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ProjectMixin } from './Project';

export interface ResearchProject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Project<D>, RdfResource<D> {
}

export function ResearchProjectMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ResearchProject> & RdfResourceCore> & Base {
  @namespace(schema)
  class ResearchProjectClass extends ProjectMixin(Resource) implements Partial<ResearchProject> {
  }
  return ResearchProjectClass
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
