import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface Festival<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
}

export function FestivalMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Festival & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FestivalClass extends EventMixin(Resource) {
  }
  return FestivalClass as any
}

class FestivalImpl extends FestivalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Festival>) {
    super(arg, init)
    this.types.add(schema.Festival)
  }

  static readonly __mixins: Mixin[] = [FestivalMixin, EventMixin];
}
FestivalMixin.appliesTo = schema.Festival
FestivalMixin.Class = FestivalImpl

export const fromPointer = createFactory<Festival>([EventMixin, FestivalMixin], { types: [schema.Festival] });
