import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Legislation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  jurisdiction: Schema.AdministrativeArea<D> | undefined;
  jurisdictionLiteral: string | undefined;
  legislationApplies: Schema.Legislation<D> | undefined;
  legislationChanges: Schema.Legislation<D> | undefined;
  legislationConsolidates: Schema.Legislation<D> | undefined;
  legislationDate: Date | undefined;
  legislationDateVersion: Date | undefined;
  legislationIdentifier: string | undefined;
  legislationIdentifierTerm: RDF.NamedNode | undefined;
  legislationJurisdiction: Schema.AdministrativeArea<D> | undefined;
  legislationJurisdictionLiteral: string | undefined;
  legislationLegalForce: Schema.LegalForceStatus | undefined;
  legislationPassedBy: Schema.Organization<D> | Schema.Person<D> | undefined;
  legislationResponsible: Schema.Organization<D> | Schema.Person<D> | undefined;
  legislationTransposes: Schema.Legislation<D> | undefined;
  legislationType: Schema.CategoryCode<D> | undefined;
  legislationTypeLiteral: string | undefined;
}

export function LegislationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LegislationClass extends CreativeWorkMixin(Resource) implements Legislation {
    @property.resource()
    jurisdiction: Schema.AdministrativeArea | undefined;
    @property.literal({ path: schema.jurisdiction })
    jurisdictionLiteral: string | undefined;
    @property.resource()
    legislationApplies: Schema.Legislation | undefined;
    @property.resource()
    legislationChanges: Schema.Legislation | undefined;
    @property.resource()
    legislationConsolidates: Schema.Legislation | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    legislationDate: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    legislationDateVersion: Date | undefined;
    @property.literal()
    legislationIdentifier: string | undefined;
    @property({ path: schema.legislationIdentifier })
    legislationIdentifierTerm: RDF.NamedNode | undefined;
    @property.resource()
    legislationJurisdiction: Schema.AdministrativeArea | undefined;
    @property.literal({ path: schema.legislationJurisdiction })
    legislationJurisdictionLiteral: string | undefined;
    @property()
    legislationLegalForce: Schema.LegalForceStatus | undefined;
    @property.resource()
    legislationPassedBy: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    legislationResponsible: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    legislationTransposes: Schema.Legislation | undefined;
    @property.resource()
    legislationType: Schema.CategoryCode | undefined;
    @property.literal({ path: schema.legislationType })
    legislationTypeLiteral: string | undefined;
  }
  return LegislationClass
}

class LegislationImpl extends LegislationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Legislation>) {
    super(arg, init)
    this.types.add(schema.Legislation)
  }

  static readonly __mixins: Mixin[] = [LegislationMixin, CreativeWorkMixin];
}
LegislationMixin.appliesTo = schema.Legislation
LegislationMixin.Class = LegislationImpl
