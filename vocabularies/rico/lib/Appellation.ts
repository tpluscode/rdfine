import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ConceptMixin } from './Concept.js';

export interface Appellation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Concept<D>, rdfine.RdfResource<D> {
  appellationIsSourceOfAppellationRelation: Rico.AppellationRelation<D> | undefined;
  isOrWasAppellationOf: Rico.Thing<D> | undefined;
  normalizedValue: RDF.Literal | undefined;
  textualValue: RDF.Literal | undefined;
  usedFromDate: RDF.Literal | undefined;
  usedToDate: RDF.Literal | undefined;
  wasUsedFromDate: Rico.Date<D> | undefined;
  wasUsedToDate: Rico.Date<D> | undefined;
}

export function AppellationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Appellation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class AppellationClass extends ConceptMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.AppellationRelation] })
    appellationIsSourceOfAppellationRelation: Rico.AppellationRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isOrWasAppellationOf: Rico.Thing | undefined;
    @rdfine.property()
    normalizedValue: RDF.Literal | undefined;
    @rdfine.property()
    textualValue: RDF.Literal | undefined;
    @rdfine.property()
    usedFromDate: RDF.Literal | undefined;
    @rdfine.property()
    usedToDate: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Date] })
    wasUsedFromDate: Rico.Date | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Date] })
    wasUsedToDate: Rico.Date | undefined;
  }
  return AppellationClass as any
}

class AppellationImpl extends AppellationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Appellation>) {
    super(arg, init)
    this.types.add(rico.Appellation)
  }

  static readonly __mixins: Mixin[] = [AppellationMixin, ConceptMixin];
}
AppellationMixin.appliesTo = rico.Appellation
AppellationMixin.Class = AppellationImpl

export const fromPointer = createFactory<Appellation>([ConceptMixin, AppellationMixin], { types: [rico.Appellation] });
