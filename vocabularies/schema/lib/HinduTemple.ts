import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlaceOfWorshipMixin } from './PlaceOfWorship.js';

export interface HinduTemple<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlaceOfWorship<D>, rdfine.RdfResource<D> {
}

export function HinduTempleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HinduTemple> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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
