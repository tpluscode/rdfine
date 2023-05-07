import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { DerivationRelationMixin } from './DerivationRelation.js';

export interface MigrationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.DerivationRelation<D>, RdfResource<D> {
  migrationRelationHasSource: Rico.Instantiation<D> | undefined;
  migrationRelationHasTarget: Rico.Instantiation<D> | undefined;
}

export function MigrationRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MigrationRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class MigrationRelationClass extends DerivationRelationMixin(Resource) implements Partial<MigrationRelation> {
    @property.resource({ implicitTypes: [rico.Instantiation] })
    migrationRelationHasSource: Rico.Instantiation | undefined;
    @property.resource({ implicitTypes: [rico.Instantiation] })
    migrationRelationHasTarget: Rico.Instantiation | undefined;
  }
  return MigrationRelationClass
}

class MigrationRelationImpl extends MigrationRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MigrationRelation>) {
    super(arg, init)
    this.types.add(rico.MigrationRelation)
  }

  static readonly __mixins: Mixin[] = [MigrationRelationMixin, DerivationRelationMixin];
}
MigrationRelationMixin.appliesTo = rico.MigrationRelation
MigrationRelationMixin.Class = MigrationRelationImpl

export const fromPointer = createFactory<MigrationRelation>([DerivationRelationMixin, MigrationRelationMixin], { types: [rico.MigrationRelation] });
