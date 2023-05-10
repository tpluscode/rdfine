import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AudienceMixin } from './Audience.js';

export interface Researcher<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Audience<D>, rdfine.RdfResource<D> {
}

export function ResearcherMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Researcher> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ResearcherClass extends AudienceMixin(Resource) implements Partial<Researcher> {
  }
  return ResearcherClass
}

class ResearcherImpl extends ResearcherMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Researcher>) {
    super(arg, init)
    this.types.add(schema.Researcher)
  }

  static readonly __mixins: Mixin[] = [ResearcherMixin, AudienceMixin];
}
ResearcherMixin.appliesTo = schema.Researcher
ResearcherMixin.Class = ResearcherImpl

export const fromPointer = createFactory<Researcher>([AudienceMixin, ResearcherMixin], { types: [schema.Researcher] });
