import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ConsumeActionMixin } from './ConsumeAction';

export interface WatchAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, RdfResource<D> {
}

export function WatchActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WatchAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class WatchActionClass extends ConsumeActionMixin(Resource) implements Partial<WatchAction> {
  }
  return WatchActionClass
}

class WatchActionImpl extends WatchActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WatchAction>) {
    super(arg, init)
    this.types.add(schema.WatchAction)
  }

  static readonly __mixins: Mixin[] = [WatchActionMixin, ConsumeActionMixin];
}
WatchActionMixin.appliesTo = schema.WatchAction
WatchActionMixin.Class = WatchActionImpl

export const fromPointer = createFactory<WatchAction>([ConsumeActionMixin, WatchActionMixin], { types: [schema.WatchAction] });
