import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface OwnershipInfo<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  acquiredFrom: Schema.Organization<D> | Schema.Person<D> | undefined;
  ownedFrom: Date | undefined;
  ownedThrough: Date | undefined;
  typeOfGood: Schema.Product<D> | Schema.Service<D> | undefined;
}

export function OwnershipInfoMixin<Base extends Constructor>(Resource: Base): Constructor<OwnershipInfo> & Base {
  @namespace(schema)
  class OwnershipInfoClass extends StructuredValueMixin(Resource) implements Partial<OwnershipInfo> {
    @property.resource()
    acquiredFrom: Schema.Organization | Schema.Person | undefined;
    @property.literal({ type: Date })
    ownedFrom: Date | undefined;
    @property.literal({ type: Date })
    ownedThrough: Date | undefined;
    @property.resource()
    typeOfGood: Schema.Product | Schema.Service | undefined;
  }
  return OwnershipInfoClass
}

class OwnershipInfoImpl extends OwnershipInfoMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OwnershipInfo>) {
    super(arg, init)
    this.types.add(schema.OwnershipInfo)
  }

  static readonly __mixins: Mixin[] = [OwnershipInfoMixin, StructuredValueMixin];
}
OwnershipInfoMixin.appliesTo = schema.OwnershipInfo
OwnershipInfoMixin.Class = OwnershipInfoImpl
