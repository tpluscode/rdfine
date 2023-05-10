import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LodgingBusinessMixin } from './LodgingBusiness.js';

export interface Hostel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LodgingBusiness<D>, rdfine.RdfResource<D> {
}

export function HostelMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Hostel> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HostelClass extends LodgingBusinessMixin(Resource) implements Partial<Hostel> {
  }
  return HostelClass
}

class HostelImpl extends HostelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Hostel>) {
    super(arg, init)
    this.types.add(schema.Hostel)
  }

  static readonly __mixins: Mixin[] = [HostelMixin, LodgingBusinessMixin];
}
HostelMixin.appliesTo = schema.Hostel
HostelMixin.Class = HostelImpl

export const fromPointer = createFactory<Hostel>([LodgingBusinessMixin, HostelMixin], { types: [schema.Hostel] });
