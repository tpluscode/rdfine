import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LegislationMixin } from './Legislation.js';
import { MediaObjectMixin } from './MediaObject.js';

export interface LegislationObject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Legislation<D>, Schema.MediaObject<D>, rdfine.RdfResource<D> {
  legislationLegalValue: Schema.LegalValueLevel | undefined;
}

export function LegislationObjectMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<LegislationObject> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LegislationObjectClass extends MediaObjectMixin(LegislationMixin(Resource)) implements Partial<LegislationObject> {
    @rdfine.property()
    legislationLegalValue: Schema.LegalValueLevel | undefined;
  }
  return LegislationObjectClass
}

class LegislationObjectImpl extends LegislationObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LegislationObject>) {
    super(arg, init)
    this.types.add(schema.LegislationObject)
  }

  static readonly __mixins: Mixin[] = [LegislationObjectMixin, LegislationMixin, MediaObjectMixin];
}
LegislationObjectMixin.appliesTo = schema.LegislationObject
LegislationObjectMixin.Class = LegislationObjectImpl

export const fromPointer = createFactory<LegislationObject>([MediaObjectMixin, LegislationMixin, LegislationObjectMixin], { types: [schema.LegislationObject] });
