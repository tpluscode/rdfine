import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface RVPark<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function RVParkMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RVPark & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class RVParkClass extends CivicStructureMixin(Resource) {
  }
  return RVParkClass as any
}

class RVParkImpl extends RVParkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RVPark>) {
    super(arg, init)
    this.types.add(schema.RVPark)
  }

  static readonly __mixins: Mixin[] = [RVParkMixin, CivicStructureMixin];
}
RVParkMixin.appliesTo = schema.RVPark
RVParkMixin.Class = RVParkImpl

export const fromPointer = createFactory<RVPark>([CivicStructureMixin, RVParkMixin], { types: [schema.RVPark] });
