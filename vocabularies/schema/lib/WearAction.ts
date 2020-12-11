import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UseActionMixin } from './UseAction';

export interface WearAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UseAction<D>, RdfResource<D> {
}

export function WearActionMixin<Base extends Constructor>(Resource: Base): Constructor<WearAction> & Base {
  @namespace(schema)
  class WearActionClass extends UseActionMixin(Resource) implements Partial<WearAction> {
  }
  return WearActionClass
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
