import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FindActionMixin } from './FindAction';

export interface CheckAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FindAction<D>, RdfResource<D> {
}

export function CheckActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CheckAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class CheckActionClass extends FindActionMixin(Resource) implements Partial<CheckAction> {
  }
  return CheckActionClass
}

class CheckActionImpl extends CheckActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CheckAction>) {
    super(arg, init)
    this.types.add(schema.CheckAction)
  }

  static readonly __mixins: Mixin[] = [CheckActionMixin, FindActionMixin];
}
CheckActionMixin.appliesTo = schema.CheckAction
CheckActionMixin.Class = CheckActionImpl
