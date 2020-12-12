import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { InformActionMixin } from './InformAction';

export interface ConfirmAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InformAction<D>, RdfResource<D> {
}

export function ConfirmActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ConfirmAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ConfirmActionClass extends InformActionMixin(Resource) implements Partial<ConfirmAction> {
  }
  return ConfirmActionClass
}

class ConfirmActionImpl extends ConfirmActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConfirmAction>) {
    super(arg, init)
    this.types.add(schema.ConfirmAction)
  }

  static readonly __mixins: Mixin[] = [ConfirmActionMixin, InformActionMixin];
}
ConfirmActionMixin.appliesTo = schema.ConfirmAction
ConfirmActionMixin.Class = ConfirmActionImpl
