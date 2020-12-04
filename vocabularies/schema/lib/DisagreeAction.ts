import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReactActionMixin } from './ReactAction';

export interface DisagreeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, RdfResource<D> {
}

export function DisagreeActionMixin<Base extends Constructor>(Resource: Base): Constructor<DisagreeAction> & Base {
  @namespace(schema)
  class DisagreeActionClass extends ReactActionMixin(Resource) implements DisagreeAction {
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
