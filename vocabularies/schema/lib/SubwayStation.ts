import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface SubwayStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function SubwayStationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SubwayStation> & RdfResourceCore> & Base {
  @namespace(schema)
  class SubwayStationClass extends CivicStructureMixin(Resource) implements Partial<SubwayStation> {
  }
  return SubwayStationClass
}

class SubwayStationImpl extends SubwayStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SubwayStation>) {
    super(arg, init)
    this.types.add(schema.SubwayStation)
  }

  static readonly __mixins: Mixin[] = [SubwayStationMixin, CivicStructureMixin];
}
SubwayStationMixin.appliesTo = schema.SubwayStation
SubwayStationMixin.Class = SubwayStationImpl

export const fromPointer = createFactory<SubwayStation>([CivicStructureMixin, SubwayStationMixin], { types: [schema.SubwayStation] });
