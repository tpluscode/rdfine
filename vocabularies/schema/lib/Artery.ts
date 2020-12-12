import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { VesselMixin } from './Vessel';

export interface Artery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vessel<D>, RdfResource<D> {
  arterialBranch: Schema.AnatomicalStructure<D> | undefined;
  supplyTo: Schema.AnatomicalStructure<D> | undefined;
}

export function ArteryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Artery> & RdfResourceCore> & Base {
  @namespace(schema)
  class ArteryClass extends VesselMixin(Resource) implements Partial<Artery> {
    @property.resource()
    arterialBranch: Schema.AnatomicalStructure | undefined;
    @property.resource()
    supplyTo: Schema.AnatomicalStructure | undefined;
  }
  return ArteryClass
}

class ArteryImpl extends ArteryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Artery>) {
    super(arg, init)
    this.types.add(schema.Artery)
  }

  static readonly __mixins: Mixin[] = [ArteryMixin, VesselMixin];
}
ArteryMixin.appliesTo = schema.Artery
ArteryMixin.Class = ArteryImpl
