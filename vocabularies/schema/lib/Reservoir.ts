import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BodyOfWaterMixin } from './BodyOfWater.js';

export interface Reservoir<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, rdfine.RdfResource<D> {
}

export function ReservoirMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Reservoir & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ReservoirClass extends BodyOfWaterMixin(Resource) {
  }
  return ReservoirClass as any
}

class ReservoirImpl extends ReservoirMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Reservoir>) {
    super(arg, init)
    this.types.add(schema.Reservoir)
  }

  static readonly __mixins: Mixin[] = [ReservoirMixin, BodyOfWaterMixin];
}
ReservoirMixin.appliesTo = schema.Reservoir
ReservoirMixin.Class = ReservoirImpl

export const fromPointer = createFactory<Reservoir>([BodyOfWaterMixin, ReservoirMixin], { types: [schema.Reservoir] });
