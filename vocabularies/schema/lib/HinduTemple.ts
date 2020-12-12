import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceOfWorshipMixin } from './PlaceOfWorship';

export interface HinduTemple<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlaceOfWorship<D>, RdfResource<D> {
}

export function HinduTempleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HinduTemple> & RdfResourceCore> & Base {
  @namespace(schema)
  class HinduTempleClass extends PlaceOfWorshipMixin(Resource) implements Partial<HinduTemple> {
  }
  return HinduTempleClass
}

class HinduTempleImpl extends HinduTempleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HinduTemple>) {
    super(arg, init)
    this.types.add(schema.HinduTemple)
  }

  static readonly __mixins: Mixin[] = [HinduTempleMixin, PlaceOfWorshipMixin];
}
HinduTempleMixin.appliesTo = schema.HinduTemple
HinduTempleMixin.Class = HinduTempleImpl

export const fromPointer = createFactory<HinduTemple>([PlaceOfWorshipMixin, HinduTempleMixin], { types: [schema.HinduTemple] });
