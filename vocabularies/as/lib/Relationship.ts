import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import type * as Rdf from '@rdfine/rdf';
import { ObjectMixin } from './Object';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface Relationship<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
  object: As.Link<D> | As.Object<D> | undefined;
  relationship: Rdf.Property<D> | undefined;
  subject: As.Link<D> | As.Object<D> | undefined;
}

export function RelationshipMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Relationship> & RdfResourceCore> & Base {
  @namespace(as)
  class RelationshipClass extends ObjectMixin(Resource) implements Partial<Relationship> {
    @property.resource()
    object: As.Link | As.Object | undefined;
    @property.resource({ as: [RdfPropertyMixin] })
    relationship: Rdf.Property | undefined;
    @property.resource()
    subject: As.Link | As.Object | undefined;
  }
  return RelationshipClass
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
