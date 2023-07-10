import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { UseActionMixin } from './UseAction.js';

export interface WearAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UseAction<D>, rdfine.RdfResource<D> {
}

export function WearActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WearAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WearActionClass extends UseActionMixin(Resource) {
  }
  return WearActionClass as any
}

class WearActionImpl extends WearActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WearAction>) {
    super(arg, init)
    this.types.add(schema.WearAction)
  }

  static readonly __mixins: Mixin[] = [WearActionMixin, UseActionMixin];
}
WearActionMixin.appliesTo = schema.WearAction
WearActionMixin.Class = WearActionImpl

export const fromPointer = createFactory<WearAction>([UseActionMixin, WearActionMixin], { types: [schema.WearAction] });
