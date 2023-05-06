import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface RealEstateAgent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function RealEstateAgentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RealEstateAgent> & RdfResourceCore> & Base {
  @namespace(schema)
  class RealEstateAgentClass extends LocalBusinessMixin(Resource) implements Partial<RealEstateAgent> {
  }
  return RealEstateAgentClass
}

class RealEstateAgentImpl extends RealEstateAgentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RealEstateAgent>) {
    super(arg, init)
    this.types.add(schema.RealEstateAgent)
  }

  static readonly __mixins: Mixin[] = [RealEstateAgentMixin, LocalBusinessMixin];
}
RealEstateAgentMixin.appliesTo = schema.RealEstateAgent
RealEstateAgentMixin.Class = RealEstateAgentImpl

export const fromPointer = createFactory<RealEstateAgent>([LocalBusinessMixin, RealEstateAgentMixin], { types: [schema.RealEstateAgent] });
