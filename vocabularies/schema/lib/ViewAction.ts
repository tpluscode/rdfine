import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ConsumeActionMixin } from './ConsumeAction.js';

export interface ViewAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, RdfResource<D> {
}

export function ViewActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ViewAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ViewActionClass extends ConsumeActionMixin(Resource) implements Partial<ViewAction> {
  }
  return ViewActionClass
}

class ViewActionImpl extends ViewActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ViewAction>) {
    super(arg, init)
    this.types.add(schema.ViewAction)
  }

  static readonly __mixins: Mixin[] = [ViewActionMixin, ConsumeActionMixin];
}
ViewActionMixin.appliesTo = schema.ViewAction
ViewActionMixin.Class = ViewActionImpl

export const fromPointer = createFactory<ViewAction>([ConsumeActionMixin, ViewActionMixin], { types: [schema.ViewAction] });
