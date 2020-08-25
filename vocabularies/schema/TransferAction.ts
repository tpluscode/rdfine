import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ActionMixin } from './Action';

export interface TransferAction extends Schema.Action, RdfResource {
  fromLocation: Schema.Place;
  toLocation: Schema.Place;
}

export function TransferActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TransferActionClass extends ActionMixin(Resource) implements TransferAction {
    @property.resource()
    fromLocation!: Schema.Place;
    @property.resource()
    toLocation!: Schema.Place;
  }
  return TransferActionClass
}

class TransferActionImpl extends TransferActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TransferAction>) {
    super(arg, init)
    this.types.add(schema.TransferAction)
  }

  static readonly __mixins: Mixin[] = [TransferActionMixin, ActionMixin];
}
TransferActionMixin.appliesTo = schema.TransferAction
TransferActionMixin.Class = TransferActionImpl
