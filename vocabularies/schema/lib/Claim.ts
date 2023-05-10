import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Claim<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  appearance: Schema.CreativeWork<D> | undefined;
  claimInterpreter: Schema.Organization<D> | Schema.Person<D> | undefined;
  firstAppearance: Schema.CreativeWork<D> | undefined;
}

export function ClaimMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Claim> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ClaimClass extends CreativeWorkMixin(Resource) implements Partial<Claim> {
    @rdfine.property.resource()
    appearance: Schema.CreativeWork | undefined;
    @rdfine.property.resource()
    claimInterpreter: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.resource()
    firstAppearance: Schema.CreativeWork | undefined;
  }
  return ClaimClass
}

class ClaimImpl extends ClaimMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Claim>) {
    super(arg, init)
    this.types.add(schema.Claim)
  }

  static readonly __mixins: Mixin[] = [ClaimMixin, CreativeWorkMixin];
}
ClaimMixin.appliesTo = schema.Claim
ClaimMixin.Class = ClaimImpl

export const fromPointer = createFactory<Claim>([CreativeWorkMixin, ClaimMixin], { types: [schema.Claim] });
