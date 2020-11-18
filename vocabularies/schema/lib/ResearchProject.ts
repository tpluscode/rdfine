import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ProjectMixin } from './Project';

export interface ResearchProject<ID extends ResourceNode = ResourceNode> extends Schema.Project<ID>, RdfResource<ID> {
}

export function ResearchProjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ResearchProjectClass extends ProjectMixin(Resource) implements ResearchProject {
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
