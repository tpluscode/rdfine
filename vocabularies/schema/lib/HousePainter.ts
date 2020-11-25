import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness';

export interface HousePainter<ID extends ResourceNode = ResourceNode> extends Schema.HomeAndConstructionBusiness<ID>, RdfResource<ID> {
}

export function HousePainterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HousePainterClass extends HomeAndConstructionBusinessMixin(Resource) implements HousePainter {
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
