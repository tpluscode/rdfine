import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CommunicateActionMixin } from './CommunicateAction';

export interface InformAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, RdfResource<D> {
  event: Schema.Event<D> | undefined;
}

export function InformActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InformActionClass extends CommunicateActionMixin(Resource) implements InformAction {
    @property.resource()
    event: Schema.Event | undefined;
  }
  return InformActionClass
}

class InformActionImpl extends InformActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InformAction>) {
    super(arg, init)
    this.types.add(schema.InformAction)
  }

  static readonly __mixins: Mixin[] = [InformActionMixin, CommunicateActionMixin];
}
InformActionMixin.appliesTo = schema.InformAction
InformActionMixin.Class = InformActionImpl