import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness.js';

export interface HousePainter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HomeAndConstructionBusiness<D>, rdfine.RdfResource<D> {
}

export function HousePainterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HousePainter> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HousePainterClass extends HomeAndConstructionBusinessMixin(Resource) implements Partial<HousePainter> {
  }
  return HousePainterClass
}

class HousePainterImpl extends HousePainterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HousePainter>) {
    super(arg, init)
    this.types.add(schema.HousePainter)
  }

  static readonly __mixins: Mixin[] = [HousePainterMixin, HomeAndConstructionBusinessMixin];
}
HousePainterMixin.appliesTo = schema.HousePainter
HousePainterMixin.Class = HousePainterImpl

export const fromPointer = createFactory<HousePainter>([HomeAndConstructionBusinessMixin, HousePainterMixin], { types: [schema.HousePainter] });
