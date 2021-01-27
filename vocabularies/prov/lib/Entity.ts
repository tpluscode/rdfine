import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';

export interface Entity<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  alternateOf: Prov.Entity<D> | undefined;
  asInBundle: Prov.Bundle<D> | undefined;
  atLocation: Prov.Location<D> | undefined;
  generatedAtTime: Date | undefined;
  hadPrimarySource: Prov.Entity<D> | undefined;
  invalidatedAtTime: Date | undefined;
  mentionOf: Prov.Entity<D> | undefined;
  qualifiedAttribution: Prov.Attribution<D> | undefined;
  qualifiedDerivation: Prov.Derivation<D> | undefined;
  qualifiedGeneration: Prov.Generation<D> | undefined;
  qualifiedInfluence: Prov.Influence<D> | undefined;
  qualifiedInvalidation: Prov.Invalidation<D> | undefined;
  qualifiedPrimarySource: Prov.PrimarySource<D> | undefined;
  qualifiedQuotation: Prov.Quotation<D> | undefined;
  qualifiedRevision: Prov.Revision<D> | undefined;
  specializationOf: Prov.Entity<D> | undefined;
  value: RDF.Term | undefined;
  wasAttributedTo: Prov.Agent<D> | undefined;
  wasDerivedFrom: Prov.Entity<D> | undefined;
  wasGeneratedBy: Prov.Activity<D> | undefined;
  wasInfluencedBy: Prov.Activity<D> | Prov.Agent<D> | Prov.Entity<D> | undefined;
  wasInvalidatedBy: Prov.Activity<D> | undefined;
  wasQuotedFrom: Prov.Entity<D> | undefined;
  wasRevisionOf: Prov.Entity<D> | undefined;
}

export function EntityMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Entity> & RdfResourceCore> & Base {
  @namespace(prov)
  class EntityClass extends Resource implements Partial<Entity> {
    @property.resource({ as: [EntityMixin] })
    alternateOf: Prov.Entity | undefined;
    @property.resource({ implicitTypes: [prov.Bundle] })
    asInBundle: Prov.Bundle | undefined;
    @property.resource({ implicitTypes: [prov.Location] })
    atLocation: Prov.Location | undefined;
    @property.literal({ type: Date })
    generatedAtTime: Date | undefined;
    @property.resource({ as: [EntityMixin] })
    hadPrimarySource: Prov.Entity | undefined;
    @property.literal({ type: Date })
    invalidatedAtTime: Date | undefined;
    @property.resource({ as: [EntityMixin] })
    mentionOf: Prov.Entity | undefined;
    @property.resource({ implicitTypes: [prov.Attribution] })
    qualifiedAttribution: Prov.Attribution | undefined;
    @property.resource({ implicitTypes: [prov.Derivation] })
    qualifiedDerivation: Prov.Derivation | undefined;
    @property.resource({ implicitTypes: [prov.Generation] })
    qualifiedGeneration: Prov.Generation | undefined;
    @property.resource({ implicitTypes: [prov.Influence] })
    qualifiedInfluence: Prov.Influence | undefined;
    @property.resource({ implicitTypes: [prov.Invalidation] })
    qualifiedInvalidation: Prov.Invalidation | undefined;
    @property.resource({ implicitTypes: [prov.PrimarySource] })
    qualifiedPrimarySource: Prov.PrimarySource | undefined;
    @property.resource({ implicitTypes: [prov.Quotation] })
    qualifiedQuotation: Prov.Quotation | undefined;
    @property.resource({ implicitTypes: [prov.Revision] })
    qualifiedRevision: Prov.Revision | undefined;
    @property.resource({ as: [EntityMixin] })
    specializationOf: Prov.Entity | undefined;
    @property()
    value: RDF.Term | undefined;
    @property.resource({ implicitTypes: [prov.Agent] })
    wasAttributedTo: Prov.Agent | undefined;
    @property.resource({ as: [EntityMixin] })
    wasDerivedFrom: Prov.Entity | undefined;
    @property.resource({ implicitTypes: [prov.Activity] })
    wasGeneratedBy: Prov.Activity | undefined;
    @property.resource()
    wasInfluencedBy: Prov.Activity | Prov.Agent | Prov.Entity | undefined;
    @property.resource({ implicitTypes: [prov.Activity] })
    wasInvalidatedBy: Prov.Activity | undefined;
    @property.resource({ as: [EntityMixin] })
    wasQuotedFrom: Prov.Entity | undefined;
    @property.resource({ as: [EntityMixin] })
    wasRevisionOf: Prov.Entity | undefined;
  }
  return EntityClass
}

class EntityImpl extends EntityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Entity>) {
    super(arg, init)
    this.types.add(prov.Entity)
  }

  static readonly __mixins: Mixin[] = [EntityMixin];
}
EntityMixin.appliesTo = prov.Entity
EntityMixin.Class = EntityImpl

export const fromPointer = createFactory<Entity>([EntityMixin], { types: [prov.Entity] });
