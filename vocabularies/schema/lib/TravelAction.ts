import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MoveActionMixin } from './MoveAction.js';

export interface TravelAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MoveAction<D>, rdfine.RdfResource<D> {
  distance: Schema.Distance<D> | undefined;
}

export function TravelActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TravelAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TravelActionClass extends MoveActionMixin(Resource) {
    @rdfine.property.resource()
    distance: Schema.Distance | undefined;
  }
  return TravelActionClass as any
}

class TravelActionImpl extends TravelActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TravelAction>) {
    super(arg, init)
    this.types.add(schema.TravelAction)
  }

  static readonly __mixins: Mixin[] = [TravelActionMixin, MoveActionMixin];
}
TravelActionMixin.appliesTo = schema.TravelAction
TravelActionMixin.Class = TravelActionImpl

export const fromPointer = createFactory<TravelAction>([MoveActionMixin, TravelActionMixin], { types: [schema.TravelAction] });
