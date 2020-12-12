import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LegislationMixin } from './Legislation';
import { MediaObjectMixin } from './MediaObject';

export interface LegislationObject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Legislation<D>, Schema.MediaObject<D>, RdfResource<D> {
  legislationLegalValue: Schema.LegalValueLevel | undefined;
}

export function LegislationObjectMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LegislationObject> & RdfResourceCore> & Base {
  @namespace(schema)
  class LegislationObjectClass extends MediaObjectMixin(LegislationMixin(Resource)) implements Partial<LegislationObject> {
    @property()
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
