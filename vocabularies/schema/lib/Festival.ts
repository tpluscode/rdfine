import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface Festival<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function FestivalMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Festival> & RdfResourceCore> & Base {
  @namespace(schema)
  class FestivalClass extends EventMixin(Resource) implements Partial<Festival> {
  }
  return FestivalClass
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
