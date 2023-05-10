import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface Grant<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  fundedItem: Schema.BioChemEntity<D> | Schema.CreativeWork<D> | Schema.Event<D> | Schema.MedicalEntity<D> | Schema.Organization<D> | Schema.Person<D> | Schema.Product<D> | undefined;
  funder: Schema.Organization<D> | Schema.Person<D> | undefined;
  sponsor: Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function GrantMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Grant> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GrantClass extends IntangibleMixin(Resource) implements Partial<Grant> {
    @rdfine.property.resource()
    fundedItem: Schema.BioChemEntity | Schema.CreativeWork | Schema.Event | Schema.MedicalEntity | Schema.Organization | Schema.Person | Schema.Product | undefined;
    @rdfine.property.resource()
    funder: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.resource()
    sponsor: Schema.Organization | Schema.Person | undefined;
  }
  return GrantClass
}

class GrantImpl extends GrantMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Grant>) {
    super(arg, init)
    this.types.add(schema.Grant)
  }

  static readonly __mixins: Mixin[] = [GrantMixin, IntangibleMixin];
}
GrantMixin.appliesTo = schema.Grant
GrantMixin.Class = GrantImpl

export const fromPointer = createFactory<Grant>([IntangibleMixin, GrantMixin], { types: [schema.Grant] });
