import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Date<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, rdfine.RdfResource<D> {
  calendar: RDF.Literal | undefined;
  certainty: RDF.Literal | undefined;
  dateQualifier: RDF.Literal | undefined;
  dateStandard: RDF.Literal | undefined;
  expressedDate: RDF.Literal | undefined;
  isBeginningDateOf: Rico.Thing<D> | undefined;
  isBirthDateOf: Rico.Person<D> | undefined;
  isDateAssociatedWith: Rico.Thing<D> | undefined;
  isDeathDateOf: Rico.Person<D> | undefined;
  isEndDateOf: Rico.Thing<D> | undefined;
  isFromUseDateOf: Rico.Appellation<D> | undefined;
  isLastUpdateDateOf: Rico.Thing<D> | undefined;
  isModificationDateOf: Rico.Thing<D> | undefined;
  isToUseDateOf: Rico.Appellation<D> | undefined;
  normalizedDateValue: RDF.Literal | undefined;
  normalizedValue: RDF.Literal | undefined;
  textualValue: RDF.Literal | undefined;
}

export function DateMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Date & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class DateClass extends ThingMixin(Resource) {
    @rdfine.property()
    calendar: RDF.Literal | undefined;
    @rdfine.property()
    certainty: RDF.Literal | undefined;
    @rdfine.property()
    dateQualifier: RDF.Literal | undefined;
    @rdfine.property()
    dateStandard: RDF.Literal | undefined;
    @rdfine.property()
    expressedDate: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isBeginningDateOf: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    isBirthDateOf: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isDateAssociatedWith: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    isDeathDateOf: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isEndDateOf: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Appellation] })
    isFromUseDateOf: Rico.Appellation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isLastUpdateDateOf: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isModificationDateOf: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Appellation] })
    isToUseDateOf: Rico.Appellation | undefined;
    @rdfine.property()
    normalizedDateValue: RDF.Literal | undefined;
    @rdfine.property()
    normalizedValue: RDF.Literal | undefined;
    @rdfine.property()
    textualValue: RDF.Literal | undefined;
  }
  return DateClass as any
}
DateMixin.appliesTo = rico.Date
DateMixin.createFactory = (env: RdfineEnvironment) => createFactory<Date>([ThingMixin, DateMixin], { types: [rico.Date] }, env)
