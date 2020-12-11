import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ConsumeActionMixin } from './ConsumeAction';

export interface EatAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, RdfResource<D> {
}

export function EatActionMixin<Base extends Constructor>(Resource: Base): Constructor<EatAction> & Base {
  @namespace(schema)
  class EatActionClass extends ConsumeActionMixin(Resource) implements Partial<EatAction> {
  }
  return EatActionClass
}

class EatActionImpl extends EatActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EatAction>) {
    super(arg, init)
    this.types.add(schema.EatAction)
  }

  static readonly __mixins: Mixin[] = [EatActionMixin, ConsumeActionMixin];
}
EatActionMixin.appliesTo = schema.EatAction
EatActionMixin.Class = EatActionImpl
