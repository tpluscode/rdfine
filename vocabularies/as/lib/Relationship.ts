import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import { ObjectMixin } from './Object.js';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface Relationship<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, rdfine.RdfResource<D> {
  object: As.Link<D> | As.Object<D> | undefined;
  relationship: Rdf.Property<D> | undefined;
  subject: As.Link<D> | As.Object<D> | undefined;
}

export function RelationshipMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Relationship & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class RelationshipClass extends ObjectMixin(Resource) {
    @rdfine.property.resource()
    object: As.Link | As.Object | undefined;
    @rdfine.property.resource({ as: [RdfPropertyMixin] })
    relationship: Rdf.Property | undefined;
    @rdfine.property.resource()
    subject: As.Link | As.Object | undefined;
  }
  return RelationshipClass as any
}

class RelationshipImpl extends RelationshipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Relationship>) {
    super(arg, init)
    this.types.add(as.Relationship)
  }

  static readonly __mixins: Mixin[] = [RelationshipMixin, ObjectMixin];
}
RelationshipMixin.appliesTo = as.Relationship
RelationshipMixin.Class = RelationshipImpl

export const fromPointer = createFactory<Relationship>([ObjectMixin, RelationshipMixin], { types: [as.Relationship] });
