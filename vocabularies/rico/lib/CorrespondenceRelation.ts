import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { KnowingRelationMixin } from './KnowingRelation.js';

export interface CorrespondenceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.KnowingRelation<D>, RdfResource<D> {
  correspondenceRelationConnects: Rico.Person<D> | undefined;
}

export function CorrespondenceRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CorrespondenceRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class CorrespondenceRelationClass extends KnowingRelationMixin(Resource) implements Partial<CorrespondenceRelation> {
    @property.resource({ implicitTypes: [rico.Person] })
    correspondenceRelationConnects: Rico.Person | undefined;
  }
  return CorrespondenceRelationClass
}

class CorrespondenceRelationImpl extends CorrespondenceRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CorrespondenceRelation>) {
    super(arg, init)
    this.types.add(rico.CorrespondenceRelation)
  }

  static readonly __mixins: Mixin[] = [CorrespondenceRelationMixin, KnowingRelationMixin];
}
CorrespondenceRelationMixin.appliesTo = rico.CorrespondenceRelation
CorrespondenceRelationMixin.Class = CorrespondenceRelationImpl

export const fromPointer = createFactory<CorrespondenceRelation>([KnowingRelationMixin, CorrespondenceRelationMixin], { types: [rico.CorrespondenceRelation] });
