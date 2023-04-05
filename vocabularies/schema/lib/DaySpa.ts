import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HealthAndBeautyBusinessMixin } from './HealthAndBeautyBusiness.js';

export interface DaySpa<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HealthAndBeautyBusiness<D>, RdfResource<D> {
}

export function DaySpaMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DaySpa> & RdfResourceCore> & Base {
  @namespace(schema)
  class DaySpaClass extends HealthAndBeautyBusinessMixin(Resource) implements Partial<DaySpa> {
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

export const fromPointer = createFactory<DaySpa>([HealthAndBeautyBusinessMixin, DaySpaMixin], { types: [schema.DaySpa] });
