import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LodgingBusinessMixin } from './LodgingBusiness';

export interface Motel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LodgingBusiness<D>, RdfResource<D> {
}

export function MotelMixin<Base extends Constructor>(Resource: Base): Constructor<Motel> & Base {
  @namespace(schema)
  class MotelClass extends LodgingBusinessMixin(Resource) implements Partial<Motel> {
  }
  return MotelClass
}

class MotelImpl extends MotelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Motel>) {
    super(arg, init)
    this.types.add(schema.Motel)
  }

  static readonly __mixins: Mixin[] = [MotelMixin, LodgingBusinessMixin];
}
MotelMixin.appliesTo = schema.Motel
MotelMixin.Class = MotelImpl
