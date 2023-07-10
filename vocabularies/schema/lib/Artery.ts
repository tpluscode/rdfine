import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { VesselMixin } from './Vessel.js';

export interface Artery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vessel<D>, rdfine.RdfResource<D> {
  arterialBranch: Schema.AnatomicalStructure<D> | undefined;
  supplyTo: Schema.AnatomicalStructure<D> | undefined;
}

export function ArteryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Artery & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ArteryClass extends VesselMixin(Resource) {
    @rdfine.property.resource()
    arterialBranch: Schema.AnatomicalStructure | undefined;
    @rdfine.property.resource()
    supplyTo: Schema.AnatomicalStructure | undefined;
  }
  return ArteryClass as any
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

export const fromPointer = createFactory<Artery>([VesselMixin, ArteryMixin], { types: [schema.Artery] });
