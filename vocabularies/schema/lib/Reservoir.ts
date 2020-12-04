import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { BodyOfWaterMixin } from './BodyOfWater';

export interface Reservoir<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, RdfResource<D> {
}

export function ReservoirMixin<Base extends Constructor>(Resource: Base): Constructor<Reservoir> & Base {
  @namespace(schema)
  class ReservoirClass extends BodyOfWaterMixin(Resource) implements Reservoir {
  }
  return ReservoirClass
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
