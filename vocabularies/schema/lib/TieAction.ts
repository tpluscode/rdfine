import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AchieveActionMixin } from './AchieveAction';

export interface TieAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AchieveAction<D>, RdfResource<D> {
}

export function TieActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TieAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class TieActionClass extends AchieveActionMixin(Resource) implements Partial<TieAction> {
  }
  return TieActionClass
}

class TieActionImpl extends TieActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TieAction>) {
    super(arg, init)
    this.types.add(schema.TieAction)
  }

  static readonly __mixins: Mixin[] = [TieActionMixin, AchieveActionMixin];
}
TieActionMixin.appliesTo = schema.TieAction
TieActionMixin.Class = TieActionImpl

export const fromPointer = createFactory<TieAction>([AchieveActionMixin, TieActionMixin], { types: [schema.TieAction] });
