import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LodgingBusinessMixin } from './LodgingBusiness.js';

export interface Resort<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LodgingBusiness<D>, rdfine.RdfResource<D> {
}

export function ResortMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Resort & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ResortClass extends LodgingBusinessMixin(Resource) {
  }
  return ResortClass as any
}

class ResortImpl extends ResortMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Resort>) {
    super(arg, init)
    this.types.add(schema.Resort)
  }

  static readonly __mixins: Mixin[] = [ResortMixin, LodgingBusinessMixin];
}
ResortMixin.appliesTo = schema.Resort
ResortMixin.Class = ResortImpl

export const fromPointer = createFactory<Resort>([LodgingBusinessMixin, ResortMixin], { types: [schema.Resort] });
