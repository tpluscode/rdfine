import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AudienceMixin } from './Audience';

export interface Researcher<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Audience<D>, RdfResource<D> {
}

export function ResearcherMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Researcher> & RdfResourceCore> & Base {
  @namespace(schema)
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
