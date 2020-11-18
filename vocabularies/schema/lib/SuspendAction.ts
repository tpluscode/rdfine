import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ControlActionMixin } from './ControlAction';

export interface SuspendAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ControlAction<D>, RdfResource<D> {
}

export function SuspendActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SuspendActionClass extends ControlActionMixin(Resource) implements SuspendAction {
  }
  return SuspendActionClass
}

class SuspendActionImpl extends SuspendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SuspendAction>) {
    super(arg, init)
    this.types.add(schema.SuspendAction)
  }

  static readonly __mixins: Mixin[] = [SuspendActionMixin, ControlActionMixin];
}
SuspendActionMixin.appliesTo = schema.SuspendAction
SuspendActionMixin.Class = SuspendActionImpl
