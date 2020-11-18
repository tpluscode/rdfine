import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MoveActionMixin } from './MoveAction';

export interface TravelAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MoveAction<D>, RdfResource<D> {
  distance: Schema.Distance<D> | undefined;
}

export function TravelActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TravelActionClass extends MoveActionMixin(Resource) implements TravelAction {
    @property.resource()
    distance: Schema.Distance | undefined;
  }
  return TravelActionClass
}

class TravelActionImpl extends TravelActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TravelAction>) {
    super(arg, init)
    this.types.add(schema.TravelAction)
  }

  static readonly __mixins: Mixin[] = [TravelActionMixin, MoveActionMixin];
}
TravelActionMixin.appliesTo = schema.TravelAction
TravelActionMixin.Class = TravelActionImpl
