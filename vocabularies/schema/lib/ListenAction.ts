import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ConsumeActionMixin } from './ConsumeAction.js';

export interface ListenAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, RdfResource<D> {
}

export function ListenActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ListenAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ListenActionClass extends ConsumeActionMixin(Resource) implements Partial<ListenAction> {
  }
  return ListenActionClass
}

class ListenActionImpl extends ListenActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ListenAction>) {
    super(arg, init)
    this.types.add(schema.ListenAction)
  }

  static readonly __mixins: Mixin[] = [ListenActionMixin, ConsumeActionMixin];
}
ListenActionMixin.appliesTo = schema.ListenAction
ListenActionMixin.Class = ListenActionImpl

export const fromPointer = createFactory<ListenAction>([ConsumeActionMixin, ListenActionMixin], { types: [schema.ListenAction] });
