import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LegalServiceMixin } from './LegalService';

export interface Attorney<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LegalService<D>, RdfResource<D> {
}

export function AttorneyMixin<Base extends Constructor>(Resource: Base): Constructor<Attorney> & Base {
  @namespace(schema)
  class AttorneyClass extends LegalServiceMixin(Resource) implements Partial<Attorney> {
  }
  return AttorneyClass
}

class AttorneyImpl extends AttorneyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Attorney>) {
    super(arg, init)
    this.types.add(schema.Attorney)
  }

  static readonly __mixins: Mixin[] = [AttorneyMixin, LegalServiceMixin];
}
AttorneyMixin.appliesTo = schema.Attorney
AttorneyMixin.Class = AttorneyImpl
