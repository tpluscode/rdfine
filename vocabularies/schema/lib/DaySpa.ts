import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { HealthAndBeautyBusinessMixin } from './HealthAndBeautyBusiness';

export interface DaySpa<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HealthAndBeautyBusiness<D>, RdfResource<D> {
}

export function DaySpaMixin<Base extends Constructor>(Resource: Base): Constructor<DaySpa> & Base {
  @namespace(schema)
  class DaySpaClass extends HealthAndBeautyBusinessMixin(Resource) implements DaySpa {
  }
  return DaySpaClass
}

class DaySpaImpl extends DaySpaMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DaySpa>) {
    super(arg, init)
    this.types.add(schema.DaySpa)
  }

  static readonly __mixins: Mixin[] = [DaySpaMixin, HealthAndBeautyBusinessMixin];
}
DaySpaMixin.appliesTo = schema.DaySpa
DaySpaMixin.Class = DaySpaImpl
