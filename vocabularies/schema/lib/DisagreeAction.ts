import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReactActionMixin } from './ReactAction.js';

export interface DisagreeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, RdfResource<D> {
}

export function DisagreeActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DisagreeAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class DisagreeActionClass extends ReactActionMixin(Resource) implements Partial<DisagreeAction> {
  }
  return DisagreeActionClass
}

class DisagreeActionImpl extends DisagreeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DisagreeAction>) {
    super(arg, init)
    this.types.add(schema.DisagreeAction)
  }

  static readonly __mixins: Mixin[] = [DisagreeActionMixin, ReactActionMixin];
}
DisagreeActionMixin.appliesTo = schema.DisagreeAction
DisagreeActionMixin.Class = DisagreeActionImpl

export const fromPointer = createFactory<DisagreeAction>([ReactActionMixin, DisagreeActionMixin], { types: [schema.DisagreeAction] });
