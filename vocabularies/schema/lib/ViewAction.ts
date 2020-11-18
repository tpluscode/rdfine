import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ConsumeActionMixin } from './ConsumeAction';

export interface ViewAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, RdfResource<D> {
}

export function ViewActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ViewActionClass extends ConsumeActionMixin(Resource) implements ViewAction {
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
