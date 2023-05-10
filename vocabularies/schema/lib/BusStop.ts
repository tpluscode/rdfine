import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface BusStop<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function BusStopMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BusStop> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BusStopClass extends CivicStructureMixin(Resource) implements Partial<BusStop> {
  }
  return BusStopClass
}

class BusStopImpl extends BusStopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BusStop>) {
    super(arg, init)
    this.types.add(schema.BusStop)
  }

  static readonly __mixins: Mixin[] = [BusStopMixin, CivicStructureMixin];
}
BusStopMixin.appliesTo = schema.BusStop
BusStopMixin.Class = BusStopImpl

export const fromPointer = createFactory<BusStop>([CivicStructureMixin, BusStopMixin], { types: [schema.BusStop] });
