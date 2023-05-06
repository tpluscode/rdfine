import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InteractActionMixin } from './InteractAction.js';

export interface MarryAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, RdfResource<D> {
}

export function MarryActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MarryAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class MarryActionClass extends InteractActionMixin(Resource) implements Partial<MarryAction> {
  }
  return MarryActionClass
}

class MarryActionImpl extends MarryActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MarryAction>) {
    super(arg, init)
    this.types.add(schema.MarryAction)
  }

  static readonly __mixins: Mixin[] = [MarryActionMixin, InteractActionMixin];
}
MarryActionMixin.appliesTo = schema.MarryAction
MarryActionMixin.Class = MarryActionImpl

export const fromPointer = createFactory<MarryAction>([InteractActionMixin, MarryActionMixin], { types: [schema.MarryAction] });
