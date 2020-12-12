import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LodgingBusinessMixin } from './LodgingBusiness';

export interface Hostel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LodgingBusiness<D>, RdfResource<D> {
}

export function HostelMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Hostel> & RdfResourceCore> & Base {
  @namespace(schema)
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
