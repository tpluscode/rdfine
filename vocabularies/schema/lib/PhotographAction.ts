import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreateActionMixin } from './CreateAction';

export interface PhotographAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreateAction<D>, RdfResource<D> {
}

export function PhotographActionMixin<Base extends Constructor>(Resource: Base): Constructor<PhotographAction> & Base {
  @namespace(schema)
  class PhotographActionClass extends CreateActionMixin(Resource) implements Partial<PhotographAction> {
  }
  return PhotographActionClass
}

class PhotographActionImpl extends PhotographActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PhotographAction>) {
    super(arg, init)
    this.types.add(schema.PhotographAction)
  }

  static readonly __mixins: Mixin[] = [PhotographActionMixin, CreateActionMixin];
}
PhotographActionMixin.appliesTo = schema.PhotographAction
PhotographActionMixin.Class = PhotographActionImpl
