import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { ThingMixin } from './Thing';

export interface Date<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, RdfResource<D> {
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

export function DateMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Date> & RdfResourceCore> & Base {
  @namespace(rico)
  class DateClass extends ThingMixin(Resource) implements Partial<Date> {
    @property()
    calendar: RDF.Literal | undefined;
    @property()
    certainty: RDF.Literal | undefined;
    @property()
    dateQualifier: RDF.Literal | undefined;
    @property()
    dateStandard: RDF.Literal | undefined;
    @property()
    expressedDate: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    isBeginningDateOf: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Person] })
    isBirthDateOf: Rico.Person | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    isDateAssociatedWith: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Person] })
    isDeathDateOf: Rico.Person | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    isEndDateOf: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Appellation] })
    isFromUseDateOf: Rico.Appellation | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    isLastUpdateDateOf: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    isModificationDateOf: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Appellation] })
    isToUseDateOf: Rico.Appellation | undefined;
    @property()
    normalizedDateValue: RDF.Literal | undefined;
    @property()
    normalizedValue: RDF.Literal | undefined;
    @property()
    textualValue: RDF.Literal | undefined;
  }
  return DateClass
}

class DateImpl extends DateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Date>) {
    super(arg, init)
    this.types.add(rico.Date)
  }

  static readonly __mixins: Mixin[] = [DateMixin, ThingMixin];
}
DateMixin.appliesTo = rico.Date
DateMixin.Class = DateImpl

export const fromPointer = createFactory<Date>([ThingMixin, DateMixin], { types: [rico.Date] });
