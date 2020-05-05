import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { FindActionMixin } from './FindAction';

export interface DiscoverAction extends Schema.FindAction, RdfResource {
}

export function DiscoverActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DiscoverActionClass extends FindActionMixin(Resource) implements DiscoverAction {
  }
  return DiscoverActionClass
}

class DiscoverActionImpl extends DiscoverActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DiscoverAction>) {
    super(arg, init)
    this.types.add(schema.DiscoverAction)
  }

  static readonly __mixins: Mixin[] = [DiscoverActionMixin, FindActionMixin];
}
DiscoverActionMixin.appliesTo = schema.DiscoverAction
DiscoverActionMixin.Class = DiscoverActionImpl
